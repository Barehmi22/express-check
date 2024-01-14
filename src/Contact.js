<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact us</title>
    <link rel="stylesheet" href="app.css" />
</head>





<body>
    <!-- Navbar -->
    <nav class="navMenu">
        <a href="/">Home</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact</a>
        
        <div class="dot"></div>
      </nav>

    <!-- section contact
     -->



     
<section class="contact" id="contact" style="margin-top: 75px;">


    <h1 class="title">
        <img class="env-img" src="image/e-mail.png" style="width: 120px; height: 100px;"/>
        Contact us
    </h1>

<div class="eee" style="justify-content: center;">
    <p class="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
    </p>

    <div class="flex" style="justify-content: space-between;">
        <div className="">
            <div className="flex">
                <label htmlFor="email">Email Address:</label>
                <input autoComplete="off" required type="email" name="email" id="email" />

            </div>

            <div class="flex" style="margin-top: 24px; text-align:start;">
                <label id="msg" class="msg" >Your message:</label>
                <textarea required name="message" id="message"></textarea>
              
            </div>

            <button  class="btn-9" >
                Envoyey
            </button>

        </div>
    </div>
</div>
</section>

<footer>
    <div class="text">
      <span
        >Created By <a href="#"></a> |Ghdiri  BaCem &#169; 2023 All Rights
        Reserved</span
      >
    </div>
  </footer>
</body>

</html>