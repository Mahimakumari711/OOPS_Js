import java.awt.*;  
import java.awt.event.ActionEvent;  
import java.awt.event.ActionListener; 
import java.awt.event.*;  
 
public class Assignment6 extends Frame {  
    private TextField textField1;  
    private Button countButton,resetButton;  
    static int count=0;  
    public Assignment6() {  
        setTitle("Assignment-6");  
        setSize(300, 250);  
        this.addWindowListener(new WindowAdapter() {  
            public void windowClosing(WindowEvent e)  
            {  
                System.exit(0);  
            }  
        });  
        setLayout(null);  
        
        textField1 = new TextField();  
        textField1.setEditable(false);  
        countButton = new Button("Count");  
        resetButton = new Button("Reset");  
        textField1.setBounds(30, 50, 130, 30);  
        countButton.setBounds(180, 50, 80, 30);  
        resetButton.setBounds(50, 100, 80, 30);  
        
        add(textField1);  
        add(countButton);  
        add(resetButton);  
        textField1.setText(Integer.toString(count));  
        
        countButton.addActionListener(new ActionListener() {  
             public void actionPerformed(ActionEvent e) {  
                try {  
                     textField1.setText(Integer.toString(++count));  
                }  
                catch (NumberFormatException ex) {  
                    textField1.setText("Invalid Input");  
                }  
             }  
        });  
        resetButton.addActionListener(new ActionListener() {  
            public void actionPerformed(ActionEvent e) {  
                try {  
                     count=0;  
                     textField1.setText(Integer.toString(count));  
                }  
                catch (NumberFormatException ex) {  
                      textField1.setText("Invalid Input");  
                }  
            }  
        }); 
    }  
  public static void main(String[] args) { 
    Assignment6 frame = new Assignment6();  
    frame.setVisible(true);  
  }  
} 
