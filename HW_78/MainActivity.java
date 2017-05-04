package com.example.sheateitelbaum.contacthw;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.Arrays;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ArrayList<String> contacts = new ArrayList<String>(Arrays.asList(
                "Donald Trump",
                "Mike Pence",
                "Warren Buffet",
                "Jared Kushner",
                "Ivanka Kushner",
                "Hillary Clinton",
                "Donald Trump",
                "Mike Pence",
                "Warren Buffet",
                "Jared Kushner",
                "Ivanka Kushner",
                "Hillary Clinton",
                "Donald Trump",
                "Mike Pence",
                "Warren Buffet",
                "Jared Kushner",
                "Ivanka Kushner",
                "Hillary Clinton"
        ));

        ListView contactsListView = (ListView)findViewById(R.id.contactsListView);
        final ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, R.layout.contact_list_item, R.id.textView, contacts);
        contactsListView.setAdapter(adapter);
        Button addContact = (Button)findViewById(R.id.addContactButton);
        final EditText editText = (EditText)findViewById(R.id.editText);
        addContact.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                adapter.add(editText.getText().toString());
            }
        });

    }
}
