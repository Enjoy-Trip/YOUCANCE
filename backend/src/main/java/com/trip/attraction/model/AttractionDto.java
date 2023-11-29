package com.trip.attraction.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.trip.user.model.UserDto;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class AttractionDto {
	private int contentid;
	private UserDto attractionUser;
	private int contenttypeid;
	private String title;
	private String addr1;
	private String addr2;
	private String zipcode;
	private String tel;
	private String firstimage;
	private String firstimage2;
	private int areacode;
	private int sigungucode;
	private double mapx;
	private double mapy;
	private String mlevel;
	private String homepage;
	private String overview;
	private String telname;
	private String cat1;
	private String cat2;
	private String cat3;
	private String createdtime;
	private String modifiedtime;
	private String booktour;

	public int getContentid() {
		return contentid;
	}

	public void setContentid(int contentid) {
		this.contentid = contentid;
	}

	public UserDto getAttractionUser() {
		return attractionUser;
	}

	public void setAttractionUser(UserDto attractionUser) {
		this.attractionUser = attractionUser;
	}

	public int getContenttypeid() {
		return contenttypeid;
	}

	public void setContenttypeid(int contenttypeid) {
		this.contenttypeid = contenttypeid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAddr1() {
		return addr1;
	}

	public void setAddr1(String addr1) {
		this.addr1 = addr1;
	}

	public String getAddr2() {
		return addr2;
	}

	public void setAddr2(String addr2) {
		this.addr2 = addr2;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getFirstimage() {
		return firstimage;
	}

	public void setFirstimage(String firstimage) {
		this.firstimage = firstimage;
	}

	public String getFirstimage2() {
		return firstimage2;
	}

	public void setFirstimage2(String firstimage2) {
		this.firstimage2 = firstimage2;
	}

	public int getAreacode() {
		return areacode;
	}

	public void setAreacode(int areacode) {
		this.areacode = areacode;
	}

	public int getSigungucode() {
		return sigungucode;
	}

	public void setSigungucode(int sigungucode) {
		this.sigungucode = sigungucode;
	}

	public double getMapx() {
		return mapx;
	}

	public void setMapx(double mapx) {
		this.mapx = mapx;
	}

	public double getMapy() {
		return mapy;
	}

	public void setMapy(double mapy) {
		this.mapy = mapy;
	}

	public String getMlevel() {
		return mlevel;
	}

	public void setMlevel(String mlevel) {
		this.mlevel = mlevel;
	}

	public String getHomepage() {
		return homepage;
	}

	public void setHomepage(String homepage) {
		this.homepage = homepage;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public String getTelname() {
		return telname;
	}

	public void setTelname(String telname) {
		this.telname = telname;
	}

	public String getCat1() {
		return cat1;
	}

	public void setCat1(String cat1) {
		this.cat1 = cat1;
	}

	public String getCat2() {
		return cat2;
	}

	public void setCat2(String cat2) {
		this.cat2 = cat2;
	}

	public String getCat3() {
		return cat3;
	}

	public void setCat3(String cat3) {
		this.cat3 = cat3;
	}

	public String getCreatedtime() {
		return createdtime;
	}

	public void setCreatedtime(String createdtime) {
		this.createdtime = createdtime;
	}

	public String getModifiedtime() {
		return modifiedtime;
	}

	public void setModifiedtime(String modifiedtime) {
		this.modifiedtime = modifiedtime;
	}

	public String getBooktour() {
		return booktour;
	}

	public void setBooktour(String booktour) {
		this.booktour = booktour;
	}

	@Override
	public String toString() {
		return "AttractionDto [contentid=" + contentid + ", attractionUser=" + attractionUser + ", contenttypeid="
				+ contenttypeid + ", title=" + title + ", addr1=" + addr1 + ", addr2=" + addr2 + ", zipcode=" + zipcode
				+ ", tel=" + tel + ", firstimage=" + firstimage + ", firstimage2=" + firstimage2 + ", areacode="
				+ areacode + ", sigungucode=" + sigungucode + ", mapx=" + mapx + ", mapy=" + mapy + ", mlevel=" + mlevel
				+ ", homepage=" + homepage + ", overview=" + overview + ", telname=" + telname + ", cat1=" + cat1
				+ ", cat2=" + cat2 + ", cat3=" + cat3 + ", createdtime=" + createdtime + ", modifiedtime="
				+ modifiedtime + ", booktour=" + booktour + "]";
	}
}
