package com.trip.favorite.service;

import java.util.HashMap;
import java.util.List;

import com.trip.favorite.model.FavoriteDto;

public interface FavoriteService {
	List<FavoriteDto> myFavoriteList(int userNo);
	List<FavoriteDto> likeUserList(int contentid);
	int makeLike(FavoriteDto favoriteDto);
	int deleteLike(HashMap<String, String> map);
}
