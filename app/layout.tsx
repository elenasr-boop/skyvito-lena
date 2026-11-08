import Image from "next/image";
import "./globals.css";
import "./css/article.css";
import "./css/article.scss";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body>
        <header className="header">
                <nav className="header__nav">
                    <div className="header__logo logo-mob">
                        <a className="logo-mob__link" href="" target="_blank">
                            <Image className="logo-mob__img" src="/logo-mob.png" alt="logo" width={30} height={30}></Image>
                        </a>
                    </div>
                    <button className="header__btn-putAd btn-hov01" id="btputAd">Разместить объявление</button>
                    <button className="header__btn-lk btn-hov01" id="btnlk">Личный кабинет</button>
                </nav>
            </header>
        {children}
        <footer className="footer">
                <div className="footer__container">
                    <div className="footer__img">
                        <a href="" target="_self">
                            <Image src="/icon_01.png" alt="home" width={30} height={30}></Image>
                        </a>                        
                    </div>
                    <div className="footer__img">
                        <a href="" target="_self">
                            <Image src="/icon_02.png" alt="home" width={30} height={30}></Image>
                        </a>
                    </div>
                    <div className="footer__img">
                        <a href="" target="_self">
                            <Image src="/icon_03.png" alt="home" width={30} height={30}></Image>
                        </a>
                    </div>
                </div>
                
            </footer>
        </body>
    </html>
  );
}
