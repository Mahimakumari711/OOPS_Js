import java.sql.*; 

class DisplayData {  
  public static void main(String args[]) { 
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
      String qry="SELECT * FROM students"; 
      Statement stmt=con.createStatement();
      ResultSet rs=stmt.executeQuery(qry); 
      while(rs.next()) { 
        System.out.println(rs.getString("first_name")+"\t"+rs.getString("last_name")+"\t"+rs.getLong ("mobile")+"\t"+rs.getString("email")+"\t"+rs.getDouble("cgpa")); 
      } 
      rs.close(); 
      stmt.close(); 
      con.close(); 
    } 
    catch(ClassNotFoundException ce) { 
      ce.printStackTrace(); 
    } 
    catch(SQLException se){ 
    se.printStackTrace(); 
  } 
} 
