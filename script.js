import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";;
import { getDatabase, update, set, ref, get, onChildChanged, onChildAdded, onChildRemoved, push, child, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

    const Config = {
        apiKey: "AIzaSyCTUIcGOhucRzoLsbu21DzNE7QMrCw399Y",
        authDomain: "shalapi-680df.firebaseapp.com",
        databaseURL: "https://shalapi-680df-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "shalapi-680df",
        storageBucket: "shalapi-680df.appspot.com",
        messagingSenderId: "652208021641",
        appId: "1:652208021641:web:e452bc643e03ccf409a658"
  };
    
    const app = initializeApp(Config);
    const db = getDatabase(app);
    const DRef = ref(db,"/user/")

    let pageCard = document.getElementById("page_card")
    let Datainner = ''


    onChildAdded(DRef,(DataAll) =>{
        const newData =  DataAll.val()


        Datainner = 
        `
        <div class="card p-0 col-sm-12 col-lg-5 m-3" style="border: none;">
        <div class="card-header text-center " id="card_top">
          Featured
        </div>
        <div class="card-body" style="direction: rtl;">

          <h5> الاسم: ${newData.name} </h5>
          <h5> البسبورات: ${newData.passport} </h5>
          <h5> الفيزا: ${newData.vesa} </h5>
          <h5> الاقامة: ${newData.resid} </h5>
          <h5> نظام الرحلة: ${newData.modeTrip} </h5>
          <div></div>

        </div>
        <div class="card-footer text-center " id="card_end">
        <div class="row justify-content-evenly ">

            <button type="button" class="btn btn-success col-7">WhatsApp</button>
            <h5 class="col-5 g-1" id="data_inp">
              2 days ago
            </h5>

          </div>
        </div>
      </div>
      
        `

        pageCard.innerHTML += Datainner

    })