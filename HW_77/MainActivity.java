package com.example.sheateitelbaum.tipcalculator;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button button = (Button)findViewById(R.id.button);
        final EditText bill = (EditText)findViewById(R.id.bill);
        final EditText percent = (EditText)findViewById(R.id.percent);
        final TextView result = (TextView)findViewById(R.id.result);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String theBill = bill.getText().toString();
                String thePercent = percent.getText().toString();
                final double tip = Float.parseFloat(theBill) * ((Float.parseFloat(thePercent) * .01));
                result.setText(Double.toString(tip) );

                final int myMessage = Log.i("MyMessage", "You clicked the button");
                            }
        });

    }
}
