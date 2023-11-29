package com.trip.searchResult.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trip.searchResult.mapper.SearchResultMapper;
import com.trip.searchResult.model.SearchResultDto;

@Service
@Transactional
public class SearchResultServiceImpl implements SearchResultService {
	private SearchResultMapper searchResultMaper;
	
	public SearchResultServiceImpl(SearchResultMapper searchResultMaper) {
		super();
		this.searchResultMaper = searchResultMaper;
	}

	@Override
	public List<SearchResultDto> searchResultList() {
		return searchResultMaper.getSearchResultList();
	}

	@Override
	public Integer updateSearchResult(String word) {
		HashMap<String, String> map = new HashMap<>();
		
		map.put("word", word);
		map.put("count", "" + searchResultMaper.getSearchResultCount(word));
		
		return searchResultMaper.updateCount(map);
	}
	
	@Override
	public Integer deleteSearchResult() {
		return searchResultMaper.deleteSearchResult();
	}
}
