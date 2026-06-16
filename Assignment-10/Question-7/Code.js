import java.awt.*;  
import java.awt.event.*;  

public class Assignment7 {  
  public static void main(String[] args) {  
    Frame frame = new Frame("My Buttons");  
    Label label=new Label("Welcome");  
    label.setAlignment(Label.CENTER);  
    label.setFont(new Font("Roboto Condensed Light", Font.BOLD, 20));  
    
    Button b1 = new Button("Red");  
    Button b2 = new Button("Green");  
    Button b3 = new Button("Blue");  
    
    b1.setBounds(50, 80, 80, 40);  
    b2.setBounds(150, 80, 80, 40);  
    b3.setBounds(260, 80, 80, 40);  
    label.setBounds(140, 120, 100, 80);  
    
    b1.addActionListener(new ActionListener() {  
      public void actionPerformed(ActionEvent e) {
        label.setForeground(Color.red);  
      }  
    });  
    
    b2.addActionListener(new ActionListener() { 
      public void actionPerformed(ActionEvent e) { 
        label.setForeground(Color.green);  
      }  
    }); 
    
    b3.addActionListener(new ActionListener() {  
      public void actionPerformed(ActionEvent e) {  
        label.setForeground(Color.blue); 
      }  
    });  
    
    frame.addWindowListener(new WindowAdapter() {  
      public void windowClosing(WindowEvent e) {  
        System.exit(0);  
      }  
    });  
    frame.add(b1);  
    frame.add(b2);  
    frame.add(b3);  
    frame.add(label);  
    frame.setSize(400, 300);  
    frame.setLayout(null);  
    frame.setVisible(true);  
  }  
} 
