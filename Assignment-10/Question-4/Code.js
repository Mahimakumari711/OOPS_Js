import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener;  
import java.awt.event.*;  

public class Assignment4 extends Frame {  
  private TextField textField1,resultField;  
  private Button factorialButton; 
  public Assignment4() {  
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
    
    factorialButton = new Button("Factorial");  
    textField1.setBounds(30, 50, 130, 30);  
    resultField.setBounds(30, 150, 130, 30);  
    factorialButton.setBounds(30, 200, 130, 30);  
    
    add(textField1);  
    add(resultField);  
    add(factorialButton);  
    
    factorialButton.addActionListener(new ActionListener() {  
      public void actionPerformed(ActionEvent e) {  
        try {  
          int n = Integer.parseInt(textField1.getText());  
          long fact=1;  
          for(int i=1;i<=n;i++)  
          fact*=i;  
          resultField.setText(Long.toString(fact));  
        }  
        catch (NumberFormatException ex) {  
          resultField.setText("Invalid Input");  
        }  
      }  
    });  
  }  
  public static void main(String[] args) {  
    Assignment4 frame = new Assignment4();  
    frame.setVisible(true);  
  }  
} 
