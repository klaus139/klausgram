import { Models } from 'appwrite';
import Loader from './Loader';
import GridPostList from './GridPostList';

type SearchResultsProps = {
    isSearchFetching: boolean;
    searchedposts: Models.Document[];
}

const SearchResults = ({isSearchFetching, searchedposts}:SearchResultsProps) => {
    if(isSearchFetching)return <Loader />
    if(searchedposts && searchedposts.documents.length > 0){
        return <GridPostList posts={searchedposts.documents} showUser={false} showStats={false} />
    }
    
  
  return (
    <div>SearchResults</div>
  )
}


export default SearchResults