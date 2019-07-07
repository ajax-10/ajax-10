package cn.group.thirteen.entity;

public class StateAndMessage<T> {
	private Integer state = 200;
	private String message = "请求成功！";
	private T data;

	public StateAndMessage() {
		super();
	}

	public StateAndMessage(Integer state, Exception e) {
		super();
		this.state = state;
		this.message = e.getMessage();
	}

	public Integer getState() {
		return state;
	}

	public void setState(Integer state) {
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
		return "StateAndMessage [state=" + state + ", message=" + message + ", data=" + data + "]";
	}

	

}
