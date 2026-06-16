import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
import java.awt.event.*;  

public class Assignment3 extends Frame {  
  private TextField textField1, textField2, resultField;  
  private Button subtractButton,addButton; 
  public Assignment3() {  
    setTitle("Assignment-3");  
    setSize(300, 250);  
    this.addWindowListener(new WindowAdapter() {  
      public void windowClosing(WindowEvent e)  
      {  
        System.exit(0);  
      }  
    });  
    setLayout(null);  
    textField1 = new TextField(); 
    textField2 = new TextField();  
    resultField = new TextField();  
    resultField.setEditable(false); 
    
    subtractButton = new Button("-");  
    addButton = new Button("+");  
    
    textField1.setBounds(30, 50, 130, 30);  
    textField2.setBounds(30, 100, 130, 30);  
    resultField.setBounds(30, 150, 130, 30);  
    
    subtractButton.setBounds(150, 200, 80, 40);  
    addButton.setBounds(50, 200, 80, 40);  
    
    add(textField1);  
    add(textField2);  
    add(resultField); 
    add(subtractButton);  
    add(addButton);  
    
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
    
    addButton.addActionListener(new ActionListener() {  
      public void actionPerformed(ActionEvent e) {  
        try {  
          int num1 = Integer.parseInt(textField1.getText());  
          int num2 = Integer.parseInt(textField2.getText());  
          int result = num1 + num2;  
          resultField.setText(Integer.toString(result));  
        }  
        catch (NumberFormatException ex) {  
          resultField.setText("Invalid Input");  
        }  
      }  
    });  
  }  
  
  public static void main(String[] args) {  
    Assignment3 frame = new Assignment3(); 
    frame.setVisible(true);  
  } 
