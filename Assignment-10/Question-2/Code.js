import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
import java.awt.event.*;  

public class Assignment2 extends Frame {  
  private TextField textField1, textField2, resultField;  
  private Button subtractButton; 
  public Assignment2() {  
    setTitle("Assignment-2");  
    setSize(300, 250);  
    this.addWindowListener(new WindowAdapter() {  
      public void windowClosing(WindowEvent e) {  
        System.exit(0);  
      }  
    }); 
    setLayout(null);  
    textField1 = new TextField();  
    textField2 = new TextField();  
    resultField = new TextField(); 
    resultField.setEditable(false);  
    subtractButton = new Button("Subtract");  
    textField1.setBounds(30, 50, 130, 30);  
    textField2.setBounds(30, 100, 130, 30);  
    resultField.setBounds(30, 150, 130, 30);  
    subtractButton.setBounds(30, 200, 130, 30); 
    add(textField1); add(textField2);  
    add(resultField);  
    add(subtractButton);  
    subtractButton.addActionListener(new ActionListener() { 
      public void actionPerformed(ActionEvent e) { 
        try {  
          int num1 = Integer.parseInt(textField1.getText());  
          int num2 = Integer.parseInt(textField2.getText());  
          int result = num1 - num2;  
          resultField.setText(Integer.toString(result));  
        }  
        catch (NumberFormatException ex) {  
          resultField.setText("Invalid Input");  
        }  
      }  
    });  
  }  
  public static void main(String[] args) {  
    Assignment2 frame = new Assignment2();  
    frame.setVisible(true);  
  }  
} 
