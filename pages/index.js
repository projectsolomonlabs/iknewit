import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactPlayer from 'react-player'



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

  return (
    <div className={styles.container}>
      <Head>
        <title>Ceven Imperial | I Knew It</title>
        <meta name="description" content="Ceven Imperial | I Knew It" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
       <div className={styles.backgroundImage}>
       <Image
            className={styles.backgroundImage}
            src="/front.png"
            alt="Project Solomon Logo"
            width={1000}
            height={1000}
            object-fit= "contain"
          />
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
        <video width="560" height="315" src="https://culturecardimages.s3.us-east-2.amazonaws.com/iknewit/I+KNEW+IT+FINAL+NO+BLOOPERS.m4v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" controls controlsList="nodownload" allowfullscreen />
        </div>
        <Image
          className={styles.videoimage}
          src="/bg.png"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
       </div>
       <div className={styles.shop}>
       <div className={styles.hats}>
       <Image
          className={styles.shopitem}
          src="/blackhat.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <Image
          className={styles.shopitem}
          src="/redhat.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <Image
          className={styles.shopitem}
          src="/bluehat.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
       </div>
       </div>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
