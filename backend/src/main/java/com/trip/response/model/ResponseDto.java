package com.trip.response.model;

public class ResponseDto<T> {
	private String state;
	private String message;
	private T data;

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "ResponseDto [state=" + state + ", message=" + message + ", data=" + data + "]";
	}
}
