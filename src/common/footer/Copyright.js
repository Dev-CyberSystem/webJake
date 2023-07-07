import React from 'react'

const Copyright = () => {
    return (
        <div className="copyright-area copyright-style-one">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                        <div className="copyright-left">
                            <ul className="ft-menu link-hover">
                              <li><a href="/contacto">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12 col-12">
                        <div className="copyright-right text-center text-md-end">
                        <a href="https://www.CyberSistem.com.ar" target="_blank">  <p className="copyright-text">© CiberSystem {new Date().getFullYear()}</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;