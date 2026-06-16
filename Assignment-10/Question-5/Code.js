import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
import java.awt.event.*;  

public class Assignment5 extends Frame {  
  private TextField textField1,resultField;  
  private Button factorialButton;  
  public Assignment5() {  
    setTitle("Calculate Factorial");  
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
    factorialButton = new Button("Reverse");  
    textField1.setBounds(30, 50, 130, 30);  
    resultField.setBounds(30, 150, 130, 30);  
    factorialButton.setBounds(30, 200, 130, 30);  
    
    add(textField1);  
    add(resultField);  
    add(factorialButton);  
    
    factorialButton.addActionListener(new ActionListener() {  
      public void actionPerformed(ActionEvent e) {  
        try {  
          long n = Integer.parseInt(textField1.getText());  
          long sum=0;  
          while(n!=0) {  
            sum=sum*10+n%10;  
            n=n/10;  
          }  
          resultField.setText(Long.toString(sum));  
        }  
        catch (NumberFormatException ex) {  
          resultField.setText("Invalid Input");  
        }  
      }  
    });  
  }  
  public static void main(String[] args) {  
    Assignment5 frame = new Assignment5();  
    frame.setVisible(true);  
  }  
}
