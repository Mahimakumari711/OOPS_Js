import java.sql.*; 

class InsertData{ 
  public static void main(String args[])  { 
    String driverName="org.postgresql.Driver"; 
    String url="jdbc:postgresql://192.168.1.17:5432/sample_db"; 
    String username="cse"; 
    String password="cse123"; 
    try { 
      Class.forName(driverName); 
      Connection con=DriverManager.getConnection(url,username,password); 
      if(con !=null) { 
        System.out.println("Connected"); 
      } 
      else { 
        System.out.println(" Not Connected"); 
      } 
      String qry="INSERT INTO students(first_name, last_name, mobile,email, cgpa)VALUES('A', 'B', 1234567890, 'a@mail.com', 8.6)"; 
      Statement stmt=con.createStatement(); 
      int i=stmt.executeUpdate(qry); 
      if(i>0) { 
        System.out.println(i+"row inserted"); 
      } 
      con.close(); 
    } 
    catch(ClassNotFoundException ce) { 
      ce.printStackTrace();
    } 
    catch(SQLException se){ 
    se.printStackTrace(); 
  } 
} 
