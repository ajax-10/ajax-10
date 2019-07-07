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
		return "�ҵ�����!"+this.bookName+" "+"���"+this.id;
	}
}
public class aaa {
	public static void main(String[] args) {
		List<Book> all = new ArrayList<Book>();
		all.add(new Book("java���ŵ�����","1"));
		all.add(new Book("���ݽṹ","2"));
		all.add(new Book("web","3"));
		int order;
		System.out.println("����ָ�� 1:����������2:����Ų���");
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
		}catch (Exception ex){//�쳣�ж�
			System.out.println("����������ָ��");
			return 0;
		}
		if (num!=1 && num!=2){
			System.out.println("��������ȷ����ָ��");
			return 0;
		}
		return num;
	}
	public static void seekName(List<Book> all){
		Scanner in = new Scanner(System.in);
		System.out.println("��������");
		String str = in.next();
		for (int i=0; i<all.size(); i++){
			if (all.get(i).getName().equals(str)){
				System.out.println("�ҵ�"+all.get(i).toString());
				return ;
			}
		}
		System.out.println("û���ҵ� ");
	}
	public static void seekId(List<Book> all){
		Scanner in = new Scanner(System.in);
		System.out.println("������");
		String str = in.next();
		for (int i=0; i<all.size(); i++){
			if (all.get(i).getId().equals(str) == true){
				System.out.println("�ҵ�"+all.get(i).toString());
				return ;
			}
		}
		System.out.println("û���ҵ�");
	}
}
