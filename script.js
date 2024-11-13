
         let ism = prompt("Ismingizni kiriting:");
         let familya = prompt("Familangizni kiriting:");
         let yosh = prompt("Yoshingizni kiriting:");
         let a = confirm("Harflar katta bo'lsinmi?");
         
         if (a) {
                  ism = ism.toUpperCase();
                  familya = familya.toUpperCase();
              } else {
                  ism = ism.toLowerCase();
                  familya = familya.toLowerCase();
              }
     
         document.body.innerHTML = `
              <div style='background:black; width:450px; height:300px; margin:0 auto; padding:30px 20px; border-radius:20px;'>
                  <h1 style='color:white;'>Foydalanuvchi Ma'lumotlari</h1>
                  <p style='color:white;'>Ism: ${ism}</p>
                  <p style='color:white;'>Familiya: ${familya}</p>
                  <p style='color:white;'>Yosh: ${yosh}</p>
              <div>
         `;

     