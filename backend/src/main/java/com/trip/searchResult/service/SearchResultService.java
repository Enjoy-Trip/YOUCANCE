package com.trip.searchResult.service;

import java.util.List;

import com.trip.searchResult.model.SearchResultDto;

public interface SearchResultService {
	List<SearchResultDto> searchResultList();
	Integer updateSearchResult(String word);
	Integer deleteSearchResult();
}
