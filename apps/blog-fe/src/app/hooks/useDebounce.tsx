import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { SEARCH_USER } from '../gql/queries/user';

export default function useDebounce(query: string) {
  const [getSearchResult, { loading, data, error }] = useLazyQuery(SEARCH_USER);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getSearchResult({
        variables: {
          query,
        },
      });
    }, 2000);
    return () => clearTimeout(timeOut);
  }, [query]);

  return { loading, data, error };
}
