package com.example.sheateitelbaum.activities;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

public class ShowName extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_show_name);
        Bundle bundle = getIntent().getExtras();
        if(bundle == null){
            return;
        }
        String string = bundle.getString("name");
        TextView textView = (TextView)findViewById(R.id.textView);
        textView.setText(string);
    }
}
