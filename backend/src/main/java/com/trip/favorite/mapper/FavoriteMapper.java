package com.trip.favorite.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.trip.favorite.model.FavoriteDto;

@Mapper
public interface FavoriteMapper {
	List<FavoriteDto> myFavoriteList(int userNo);
	List<FavoriteDto> likeUserList(int contentid);
	int makeLike(FavoriteDto favoriteDto);
	int deleteLike(HashMap<String, String> map);
}
