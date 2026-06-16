import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
import java.awt.event.*;  

public class Assignment8 extends Frame {  
  private TextField textField1,resultField;  
  private Button factorialButton;  
  private Label lb1,lb2;  
  
  public Assignment8() {  
    setTitle("Calculate Number of Digits"); 
    setSize(300, 250); 
    
    this.addWindowListener(new WindowAdapter() {  
      public void windowClosing(WindowEvent e) { 
        System.exit(0);  
      }  
    });  
    
    setLayout(null);
    textField1 = new TextField();  
    resultField = new TextField();  
    resultField.setEditable(false);  
    factorialButton = new Button("No. of Digits");  
    lb1=new Label("Input number");  
    lb2= new Label("Number of digits");  
    lb1.setBounds(30, 50, 130, 30);  
    textField1.setBounds(150, 50, 130, 30);  
    lb2.setBounds(30, 100, 130, 30);  
    resultField.setBounds(150, 100, 130, 30);  
    factorialButton.setBounds(80, 150, 130, 30);  
    
    add(textField1);  
    add(resultField);  
    add(factorialButton);  
    add(lb1);  
    add(lb2);  
    
    factorialButton.addActionListener(new ActionListener() {  
      public void actionPerformed(ActionEvent e) {  
        try {  
          int n = Integer.parseInt(textField1.getText());  
          int count=0;  
          while(n!=0) {  
            count++;  
            n=n/10;  
          }  
          resultField.setText(Integer.toString(count));  
        }  
        catch (NumberFormatException ex) {  
          resultField.setText("Invalid Input");  
        }  
      }  
    });  
  }  
  
  public static void main(String[] args) {  
    Assignment8 frame = new Assignment8();  
    frame.setBackground(Color.LIGHT_GRAY);  
    frame.setVisible(true);  
  }  
} 
