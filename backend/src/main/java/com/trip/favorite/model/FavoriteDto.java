package com.trip.favorite.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.trip.user.model.UserDto;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class FavoriteDto {
	private UserDto userDto;
	private int contentid;
	private String favoriteTime;
	private String favotiteComment;

	public UserDto getUserDto() {
		return userDto;
	}

	public void setUserDto(UserDto userDto) {
		this.userDto = userDto;
	}

	public int getContentid() {
		return contentid;
	}

	public void setContentid(int contentid) {
		this.contentid = contentid;
	}

	public String getFavoriteTime() {
		return favoriteTime;
	}

	public void setFavoriteTime(String favoriteTime) {
		this.favoriteTime = favoriteTime;
	}

	public String getFavotiteComment() {
		return favotiteComment;
	}

	public void setFavotiteComment(String favotiteComment) {
		this.favotiteComment = favotiteComment;
	}

	@Override
	public String toString() {
		return "FavoriteDto [userDto=" + userDto + ", contentid=" + contentid + ", favoriteTime=" + favoriteTime
				+ ", favotiteComment=" + favotiteComment + "]";
	}
}
