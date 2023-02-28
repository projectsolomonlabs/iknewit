import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactPlayer from 'react-player'
import Slideshow from '../components/slideshow'
import { useRouter } from 'next/router';



export default function Home() {

  const {push} = useRouter()

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
    <div className={styles.waitcontainer}>
      <Head>
        <title>Ceven Imperial | I Knew It</title>
        <meta name="description" content="Ceven Imperial | I Knew It" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        

{/* <!-- Begin Mailchimp Signup Form --> */}
<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css"/>

<div id="mc_embed_signup" className={styles.chimpcontainer}>
    <form action="https://cevenimperial.us21.list-manage.com/subscribe/post?u=f26d822b758ff7da71e17cd60&amp;id=1cd3e36ec0&amp;f_id=00d58ae1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
    <Image
          className={styles.waithat}
          src="/redhat.gif"
          alt="Project Solomon Logo"
          width={1000}
          height={1000}
          object-fill="cover"
        />
        <h2>777 HAT WAITING LIST</h2>
<div class="mc-field-group">
    <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
</label>
    <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required/>
    
</div>
<div class="mc-field-group">
    <label for="mce-FNAME">First Name </label>
    <input type="text" name="FNAME" class="" id="mce-FNAME"/>
</div>
{/*     <div id="mce-responses" class="clear foot">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
    </div>  */}
{/*    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" value="JOIN" name="subscribe" id="mc-embedded-subscribe" className={styles.subbutton}/>
            </div>
        </div>
    </div>
</form>
</div>
{/* <!--End mc_embed_signup--> */}

      </div>
    </div>
      )
}
