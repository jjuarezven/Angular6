import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase/app";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedOption = "recipe";

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBHIA8_zaK15csS9q61z7Sntq9fdAWbjiY",
      authDomain: "ng-recipe-book-f0b42.firebaseapp.com"
    });
  }
}
