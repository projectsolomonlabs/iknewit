import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactPlayer from 'react-player'
import Slideshow from '../components/slideshow'



export default function Home() {

  /**
 * Stop an iframe or HTML5 <video> from playing
 * @param  {Element} element The element that contains the video
 */
var stopVideo = function ( element ) {
	var iframe = element.querySelector( 'iframe');
	var video = element.querySelector( 'video' );
	if ( iframe ) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
	if ( video ) {
		video.pause();
	}
};
// var slideshow = function(){
//     var counter = 1;
//     setInterval(function(){
//       getElementById('radio' + counter).checked = true;
//       counter++;
//       if(counter > 4){
//         counter = 1;
//       }
//     }, 5000)};

  return (
    <div className={styles.container}>
      <Head>
        <title>Ceven Imperial | I Knew It</title>
        <meta name="description" content="Ceven Imperial | I Knew It" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
       <div className={styles.backgroundImage}>
       
        <div className={styles.backimage}>
        <Image
            className={styles.overimage}
            src="/ikifront.png"
            alt="Project Solomon Logo"
            width={1000}
            height={1000}
            object-fit= "fill"
          />
        </div>
        <Slideshow/>
       </div>
       <div className={styles.gallery}>
       <Image
            className={styles.icard}
            src="/2.jpg"
            alt="Project Solomon Logo"
            width={1000}
            height={1000}
            object-fit= "fill"
          />
          <Image
            className={styles.icard}
            src="/2.5.jpg"
            alt="Project Solomon Logo"
            width={1000}
            height={1000}
            object-fit= "fill"
          />
          <Image
            className={styles.icard}
            src="/3.jpg"
            alt="Project Solomon Logo"
            width={1000}
            height={1000}
            object-fit= "fill"
          />
          <Image
            className={styles.icard}
            src="/3.5.jpg"
            alt="Project Solomon Logo"
            width={1000}
            height={1000}
            object-fit= "fill"
          />
          <Image
          className={styles.icard}
          src="/4.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "fill"
        />
        <Image
          className={styles.icard}
          src="/5.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "fill"
        />
        <Image
          className={styles.icard}
          src="/6.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "fill"
        />
        <Image
          className={styles.icard}
          src="/7.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "fill"
        />
        <Image
          className={styles.icard}
          src="/8.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "fill"
        />
        <Image
          className={styles.icard}
          src="/9.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "fill"
        />
         <Image
          className={styles.icard}
          src="/10.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "fill"
        />
        <Image
          className={styles.icard}
          src="/11.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "fill"
        />
        <Image
          className={styles.icard}
          src="/12.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "fill"
        />
        <Image
          className={styles.icard}
          src="/13.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "contain"
        />
         <Image
          className={styles.icard}
          src="/14.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "fill"
        />
         <Image
          className={styles.icard}
          src="/15.jpg"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fit= "fill"
        />
       </div>
       <div className={styles.videoarea}>
       <Image
          className={styles.frame}
          src="/goldframe.png"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <div className={styles.video}>
        <iframe className={styles.deskvid} width="675" height="380" src="https://www.youtube.com/embed/0TxDDeSKCbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className={styles.mobilevid} width="252" height="140" src="https://www.youtube.com/embed/0TxDDeSKCbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <Image
          className={styles.videoimage}
          src="/1CevenBG.png"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="fill"
        />
       </div>
       <div className={styles.shop}>
        <h1>SHOP</h1>
       <div className={styles.hats}>
       <div className={styles.card}>
        <Image
          className={styles.shopitem}
          src="/blackhat.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <h3 className={styles.button}>BUY NOW</h3>
        </div>
        <div className={styles.card}>
        <Image
          className={styles.shopitem}
          src="/redhat.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <h3 className={styles.button}>BUY NOW</h3>
        </div>
        <div className={styles.card}>
        <Image
          className={styles.shopitem}
          src="/bluehat.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <h3 className={styles.button}>BUY NOW</h3>
        </div>
       </div>
        <div className={styles.hats}>
        <div className={styles.card}>
        <Image
          className={styles.shopitem}
          src="/jesustee.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <h3 className={styles.button}>BUY NOW</h3>
        </div>
        <div className={styles.card}>
        <Image
          className={styles.shopitem}
          src="/777tee.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <h3 className={styles.button}>BUY NOW</h3>
        </div>
        <div className={styles.card}>
        <Image
          className={styles.shopitem}
          src="/buddhatee.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <h3 className={styles.button}>BUY NOW</h3>
        </div>
        </div>
        </div>
        <div className={styles.shop}>
        <h1>BONUS</h1>
       <div className={styles.hats}>
       <div className={styles.card}>
        <Image
          className={styles.shopitem}
          src="/cevenchrist.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <h3 className={styles.button}>VIEW</h3>
        </div>
        <div className={styles.card}>
        <Image
          className={styles.shopitem}
          src="/777.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <h3 className={styles.button}>VIEW</h3>
        </div>
        <div className={styles.card}>
        <Image
          className={styles.shopitem}
          src="/buddha.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <h3 className={styles.button}>VIEW</h3>
        </div>
       </div>
        <div className={styles.hats}>
        <div className={styles.card}>
        <Image
          className={styles.shopitem}
          src="/iki.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <h3 className={styles.button}>VIEW</h3>
        </div>
        
        </div>

       </div>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
