import React from 'react';
import { View } from "react-native";
import { Searchbar } from 'react-native-paper';
const SEARCH_DEBOUNCE_TIME = 2000;


function debounce(func: any, wait: number) { // https://medium.com/@kartikag01/debounce-api-request-in-react-functional-component-664b4971d9dd
  let timeout: any;
  return function(...args: any[]) {
    const context: any = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}


const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const debounceOnChange = React.useCallback(debounce(call_api, SEARCH_DEBOUNCE_TIME), []);

  function call_api(search_query: string) {
    if (search_query) {
      console.log('send this data to API: ', search_query);
    }
  }


  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={(search_query) => {
          setSearchQuery(search_query);
          debounceOnChange(search_query);
        }}
        value={searchQuery}
      />
    </View>
  );
}

export default SearchComponent;
