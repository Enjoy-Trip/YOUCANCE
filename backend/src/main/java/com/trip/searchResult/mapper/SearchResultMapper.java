package com.trip.searchResult.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.trip.searchResult.model.SearchResultDto;

@Mapper
public interface SearchResultMapper {
	List<SearchResultDto> getSearchResultList();
	Integer getSearchResultCount(String word);
	int updateCount(HashMap<String, String> map);
	int deleteSearchResult();
}
