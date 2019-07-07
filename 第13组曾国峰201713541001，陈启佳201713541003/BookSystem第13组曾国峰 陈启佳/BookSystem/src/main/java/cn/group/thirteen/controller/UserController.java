package cn.group.thirteen.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.group.thirteen.entity.StateAndMessage;
import cn.group.thirteen.entity.UserEntity;
import cn.group.thirteen.service.UserService;


@Controller
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService us;
	
	@RequestMapping(value="/insertStudent.do", method=RequestMethod.POST)
	@ResponseBody
	private StateAndMessage<Void> insertActivity(HttpSession session, 
			@RequestParam("stu_no")String stuNo,
			@RequestParam("stu_name")String stuName){
		UserEntity ue = new UserEntity();
		ue.setStuNo(stuNo);
		ue.setStuName(stuName);
		//System.out.println(ue);
		us.insertStudent(ue);
		return new StateAndMessage<>();
		
	}
	@RequestMapping(value="/queryStudentAll.do", method=RequestMethod.POST)
	@ResponseBody
	private StateAndMessage<List<UserEntity>> queryStudentAll(HttpSession session){
		List<UserEntity> list = us.queryStudentAll();
		StateAndMessage<List<UserEntity>> sam =  new StateAndMessage<>();
		sam.setData(list);
		return sam;
		
	}
	@RequestMapping(value="/queryStudent.do", method=RequestMethod.POST)
	@ResponseBody
	private StateAndMessage<UserEntity> queryStudent(HttpSession session, 
			@RequestParam("stu_name")String stuName){
		UserEntity list = us.queryStudent(stuName);
		StateAndMessage<UserEntity> sam =  new StateAndMessage<>();
		sam.setData(list);
		return sam;
		
	}
}
