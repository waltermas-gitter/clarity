function initializeSearch(index) {
  const searchKeys = ['title', 'link', 'body', 'id', 'section', 'tags'];

  const searchPageElement = elem('#searchpage');

  const searchOptions = {
    ignoreLocation: true,
    findAllMatches: true,
    includeScore: true,
    shouldSort: true,
    keys: searchKeys,
    threshold: 0.0
  };

  index = new Fuse(index, searchOptions);

  function minQueryLen(query) {
    query = query.trim();
    const queryIsFloat = parseFloat(query);
    const minimumQueryLength = queryIsFloat ? 1 : 2;
    return minimumQueryLength;
  }

  function searchResults(results=[], query="", passive = false, showResults = null) {
    let resultsFragment = new DocumentFragment();
    if (!showResults) {
      showResults = elem('.search_results');
    }
    if(passive) {
      showResults = searchPageElement;
    }
    if (!showResults) return;

    emptyEl(showResults);

    const queryLen = query.length;
    const requiredQueryLen = minQueryLen(query);

    if(results.length && queryLen >= requiredQueryLen) {
      let resultsTitle = createEl('h3');
      resultsTitle.className = 'search_title';
      resultsTitle.innerText = quickLinks;

      let goBackButton = createEl('button');
      goBackButton.textContent = 'Go Back';
      goBackButton.className = goBackClass;
      if(passive) {
        resultsTitle.innerText = searchResultsLabel;
      }
      if(!searchPageElement) {
        results = results.slice(0,8);
      } else {
        resultsFragment.appendChild(goBackButton);
        results = results.slice(0,12);
      }
      resultsFragment.appendChild(resultsTitle);

      results.forEach(function(result){
        let item = createEl('a');
        item.href = `${result.link}?query=${query}`;
        item.className = 'search_result';
        item.style.order = result.score;
        if(passive) {
          pushClass(item, 'passive');
          let itemTitle = createEl('h3');
          itemTitle.textContent = result.title;
          item.appendChild(itemTitle);

          let itemDescription = createEl('p');
          // position of first search term instance
          let queryInstance = result.body.indexOf(query);
          itemDescription.textContent = `${result.body.substring(queryInstance, queryInstance + 200)}`;
          item.appendChild(itemDescription);
        } else {
          item.textContent = result.title;
        }
        resultsFragment.appendChild(item);
      });
    }

    if(queryLen >= requiredQueryLen) {
      if (!results.length) {
        showResults.innerHTML = `<span class="search_result">${noMatchesFound}</span>`;
      }
    } else {
      showResults.innerHTML = `<label for="find" class="search_result">${ queryLen > 1 ? shortSearchQuery : typeToSearch }</label>`
    }

    showResults.appendChild(resultsFragment);
  }

  function search(searchTerm, scope = null, passive = false, resultsContainer = null) {
    if(searchTerm.length) {
      let rawResults = index.search(searchTerm);
      rawResults = rawResults.map(function(result){
        const score = result.score;
        const resultItem = result.item;
        resultItem.score = (parseFloat(score) * 50).toFixed(0);
        return resultItem ;
      })

      if(scope) {
        rawResults = rawResults.filter(resultItem => {
          return resultItem.section == scope;
        });
      }

      passive ? searchResults(rawResults, searchTerm, true, resultsContainer) : searchResults(rawResults, searchTerm, false, resultsContainer);

    } else {
      passive ? searchResults([], "", true, resultsContainer) : searchResults([], "", false, resultsContainer);
    }
  }

  function liveSearch() {
    const searchFields = elems(searchFieldClass);

    if (searchFields) {
      searchFields.forEach(function(searchField) {
        const searchScope = searchField.dataset.scope;
        const searchContainer = searchField.closest(searchClass);
        const resultsContainer = searchContainer ? elem('.search_results', searchContainer) : null;

        searchField.addEventListener('input', function() {
          const searchTerm = searchField.value.trim().toLowerCase();
          search(searchTerm, searchScope, false, resultsContainer);
        });

        if(!searchPageElement) {
          searchField.addEventListener('search', function(){
            const searchTerm = searchField.value.trim().toLowerCase();
            if(searchTerm.length)  {
              const scopeParameter = searchScope ? `&scope=${searchScope}` : '';
              window.location.href = new URL(baseURL + `search/?query=${searchTerm}${ scopeParameter }`).href;
            }
          });
        }
      });
    }
  }

  function passiveSearch() {
    if(searchPageElement) {
      const searchTerm = findQuery();
      const searchScope = findQuery('scope');
      // search actively after search page has loaded
      const searchField = elem(searchFieldClass);

      search(searchTerm, searchScope, true);

      if(searchField) {
        searchField.addEventListener('input', function() {
          const searchTerm = searchField.value.trim().toLowerCase();
          search(searchTerm, null, true);
          wrapText(searchTerm, main);
        });
      }
    }
  }

  function hasSearchResults() {
    const searchResults = elems('.results');
    let found = false;
    if(searchResults) {
      searchResults.forEach(function(sr) {
        if (sr.innerHTML.length > 0) {
          found = [sr, sr.innerHTML.length];
        }
      });
    }
    return found;
  }

  function clearSearchResults() {
    const searchResults = elems('.results');
    if(searchResults) {
      searchResults.forEach(function(sr) {
        sr.innerHTML = "";
      });
    }
    // clear all search fields
    const searchFields = elems(searchFieldClass);
    if (searchFields) {
      searchFields.forEach(function(sf) {
        sf.value = "";
      });
    }
  }

  function onEscape(fn){
    window.addEventListener('keydown', function(event){
      if(event.code === "Escape") {
        fn();
      }
    });
  }

  let main = elem('main');
  if(!main) {
    main = elem('.main');
  }

  searchPageElement ? false : liveSearch();
  passiveSearch();

  highlightSearchTerms(findQuery(), '.post_body', 'mark', 'search-term');

  onEscape(clearSearchResults);

  window.addEventListener('click', function(event){
    const target = event.target;
    const isSearch = target.closest(searchClass) || target.matches(searchClass);
    if(!isSearch && !searchPageElement) {
      clearSearchResults();
    }
  });
}

function highlightSearchTerms(search, context, wrapper = 'mark', cssClass = '') {
  const query = findQuery()
  if(query){

    let container = elem(context);
    let reg = new RegExp("(" + search + ")", "gi");

    function searchInNode(parentNode, search) {
      forEach(parentNode, function (node) {
        if (node.nodeType === 1) {
          searchInNode(node, search);
        } else if (
          node.nodeType === 3 &&
          reg.test(node.nodeValue)
        ) {
          let string = node.nodeValue.replace(reg, `<${wrapper} class="${cssClass}">$1</${wrapper}>`);
          let span = document.createElement("span");
          span.dataset.searched = "true";
          span.innerHTML = string;
          parentNode.replaceChild(span, node);
        }
      });
    };

    searchInNode(container, search);

  }
}

window.addEventListener('load', function() {
  const pageLanguage = elem('body').dataset.lang;
  const searchIndexLangSlug = pageLanguage === defaultSiteLanguage ? '': `${pageLanguage}/`;
  let searchIndex = `${searchIndexLangSlug}index.json`;
  searchIndex = new URL(`${baseURL}${searchIndex}`).href;
  fetch(searchIndex)
  .then(response => response.json())
  .then(function(data) {
    data = data.length ? data : [];
    initializeSearch(data);
  })
  .catch((error) => console.error(error));
});
