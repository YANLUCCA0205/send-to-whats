// login.js
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.backgroundColor = "#0d0d0d";
document.body.style.height = "100vh";
document.body.style.overflowX = "hidden"; // Evita scroll lateral desnecessário

// HTML
document.body.innerHTML = `
  <div class="container">
    <div class="login-box">
      <h2>Acesso ao sistema</h2>
      
      <div class="input-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      
      <div class="forgot-password">
        <a href="#" class="forgot-link">Forgot password?</a>
      </div>
      
      <button class="login-btn">Log in</button>
      
      <div class="signup-section">
        <span class="signup-text">Don't have an account? </span>
        <a href="#" class="signup-link">Sign up</a>
      </div>

      <div class="signup-section">
        <a href="http://localhost/code/Send_To_WhatsApp/" class="signup-link">Voltar a página anterior</a>
      </div>
    </div>
  </div>
`;

// CSS
const style = document.createElement("style");
style.textContent = `
  .container {
    display: flex;
    height: 100vh;
    width: 100%;
    background-image: url('./img/FUNDO LOGIN.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: flex-end;
    position: relative;
  }

  .login-box {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 85px 40px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.8);
    text-align: left;
    width: 350px;
    position: relative;
    z-index: 2;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin-left: 40%; /* deslocado no PC */
    margin-right: 20%;
  }

  .login-box h2 {
    color: #fff;
    margin-bottom: 30px;
    font-size: 32px;
    font-weight: 300;
    text-align: center;
  }

  .input-group {
    margin-bottom: 20px;
  }

  .input-group label {
    display: block;
    color: #aaa;
    margin-bottom: 8px;
    font-size: 14px;
  }

  .input-group input {
    width: 100%;
    padding: 12px;
    border: 1px solid #333;
    border-radius: 6px;
    background-color: rgba(28, 28, 28, 0.9);
    color: #fff;
    font-size: 14px;
    box-sizing: border-box;
  }

  .input-group input:focus {
    outline: none;
    border-color: #4a90e2;
  }

  .forgot-password {
    text-align: right;
    margin-bottom: 25px;
  }

  .forgot-link {
    color: #aaa;
    text-decoration: none;
    font-size: 14px;
  }

  .forgot-link:hover {
    color: #4a90e2;
  }

  .login-btn {
    width: 100%;
    padding: 12px;
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 25px;
  }

  .login-btn:hover {
    background-color: #357abd;
  }

  .signup-section {
    text-align: center;
  }

  .signup-text {
    color: #aaa;
    font-size: 14px;
  }

  .signup-link {
    color: #4a90e2;
    text-decoration: none;
    font-size: 14px;
  }

  .signup-link:hover {
    text-decoration: underline;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .container {
      justify-content: center;
      padding: 0 20px;
      background-image: url('./img/fundo_login1.webp') !important;
      width: 90%;
    }
    
    .login-box {

      padding: 30px;
      margin: 0 auto; /* centraliza no mobile */
    }
  }
`;
document.head.appendChild(style);
