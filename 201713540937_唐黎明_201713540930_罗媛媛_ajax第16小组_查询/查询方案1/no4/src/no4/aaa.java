package no4;
import java.util.*;

class Book{
	private String bookName;
	private String id;
	Book(String bookName, String id){
		this.bookName = bookName;
		this.id = id;
	}
	public String getName(){
		return this.bookName;
	}
	public String getId(){
		return this.id;
	}
	public String toString(){
		return "找到此书!"+this.bookName+" "+"编号"+this.id;
	}
}
public class aaa {
	public static void main(String[] args) {
		List<Book> all = new ArrayList<Book>();
		all.add(new Book("java入门到放弃","1"));
		all.add(new Book("数据结构","2"));
		all.add(new Book("web","3"));
		int order;
		System.out.println("输入指令 1:按书名查找2:按序号查找");
		while (true){
			order = impor();
			if (order == 1){
				seekName(all);
			}
			if (order == 2){
				seekId(all);
			}
		}
	}
	public static int impor(){
		int num=0;
		Scanner in = new Scanner(System.in);
		try{
			num = in.nextInt();
		}catch (Exception ex){//异常判断
			System.out.println("请输入数字指令");
			return 0;
		}
		if (num!=1 && num!=2){
			System.out.println("请输入正确数字指令");
			return 0;
		}
		return num;
	}
	public static void seekName(List<Book> all){
		Scanner in = new Scanner(System.in);
		System.out.println("输入书名");
		String str = in.next();
		for (int i=0; i<all.size(); i++){
			if (all.get(i).getName().equals(str)){
				System.out.println("找到"+all.get(i).toString());
				return ;
			}
		}
		System.out.println("没有找到 ");
	}
	public static void seekId(List<Book> all){
		Scanner in = new Scanner(System.in);
		System.out.println("输入编号");
		String str = in.next();
		for (int i=0; i<all.size(); i++){
			if (all.get(i).getId().equals(str) == true){
				System.out.println("找到"+all.get(i).toString());
				return ;
			}
		}
		System.out.println("没有找到");
	}
}
