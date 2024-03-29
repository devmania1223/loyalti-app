import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";

const TermsOfUse: React.FC = () => (
  <IonPage>
    <IonHeader mode="ios" translucent>
      <IonToolbar className="font-sans">
        <IonButtons slot="start">
          <IonBackButton
            text="Back"
            icon={chevronBack}
            defaultHref="/MoreInfo"
            className="text-blue-500 font-sans"
          />
        </IonButtons>
        <IonTitle>Terms Of Use</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonTitle className="mt-6 mb-3 text-3xl text-center font-black font-sans">
        Terms Of Use
      </IonTitle>
      <div className="px-5 py-10 font-sans">
        <div className="font-bold">Welcome to Loyalti!</div>
        <p>
          Thanks for using our product. By using our Services, you are agreeing
          to these terms. Please read them carefully. IF YOU DO NOT AGREE TO
          THESE TERMS, PLEASE DO NOT USE THE SERVICES.
        </p>
        <p>
          These terms govern your use of Loyalti, including its features, apps,
          services, technologies, and software we offer, except where we
          expressly state that separate terms (and not these) apply.
        </p>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Using our Services
        </p>
        <div>
          You must follow any policies made available to you within the
          Services. Don't misuse our Services. For example, don't interfere with
          our Services or try to access them using a method other than the
          interface and the instructions that we provide. You may use our
          Services only as permitted by law, including applicable export and
          re-export control laws and regulations. We may suspend or stop
          providing our Services to you if you do not comply with our terms or
          policies or if we are investigating suspected misconduct.
        </div>
        <div>
          Using our Services does not give you ownership of any intellectual
          property rights in our Services or the content you access. You may not
          use content from our Services unless you obtain permission from its
          owner or are otherwise permitted by law. These terms do not grant you
          the right to use any branding or logos used inour Services. Don't
          remove, obscure, or alter any legal notices displayed in or along with
          our Services.
        </div>
        <div>
          In connection with your use of the Services, we may send you service
          announcements, administrative messages, and other information. You may
          opt-out of some of those communications.
        </div>
        <div>
          Most of our Services are available on mobile devices. Do not use such
          Services in a way that distracts you and prevents you from obeying
          traffic or safety laws.
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Your Loyalti Account
        </p>

        <div>
          You may need a Loyalti Account to use some of our Services. To protect
          your Loyalti Account, keep your password confidential. You are
          responsible for the activity that happens on or through your Loyalti
          Account. Try not to reuse your Loyalti Account password on third-party
          applications.
        </div>

        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Privacy and Copyright Protection
        </p>
        <div>
          Loyalti's Privacy Policy explains how we treat your data and protect
          your privacy when you use our Services. By using our Services, you
          agree that Loyalti can use such data in accordance with our privacy
          policies.
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Your Content in Our Services
        </p>
        <div>
          Some of our Services allow you to create, upload, submit, save, send
          or receive content. You retain ownership of any intellectual property
          rights that you hold in that content. In short, what belongs to you
          stays yours.
        </div>
        <div>
          You can find more information about how Loyalti uses and stores content
          in the Privacy Policy or additional terms for particular Services. If
          you submit feedback or suggestions about our Services, we may use your
          feedback or suggestions without obligation to you.
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          About Software in Our Services
        </p>
        <div>
          When a Service requires or includes downloadable software, this
          software may update automatically on your device once a new version or
          feature is available. Some Services may let you adjust your automatic
          update settings. Loyalti gives you a personal, worldwide, royalty-free,
          non-assignable, and non- exclusive license to use the software
          provided to you by Loyalti as part of the Services. This license is for
          the sole purpose of enabling you to use and enjoy the benefit of the
          Services as provided by Loyalti, in the manner permitted by these terms.
          You may not copy, modify, distribute, sell, or lease any part of our
          Services or included software, nor may you reverse engineer or attempt
          to extract the source code of that software, unless laws prohibit
          those restrictions or you have our written permission.
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Modifying and Terminating Our Services
        </p>
        <div>
          We may modify these terms or any additional terms that apply to a
          Service to, for example, reflect changes to the law or changes to our
          Services. You should look at the terms regularly. We'll post notice of
          modifications to these terms on this page. Changes will not apply
          retroactively and will become effective no sooner than fourteen days
          after they are posted. However, changes addressing new functions for a
          Service or changes made for legal reasons will be effective
          immediately. If you do not agree to the modified terms for a Service,
          you should discontinue your use of the Service. If there is a conflict
          between these terms and the additional terms, the additional terms
          will control that conflict.
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Our Warranties and Disclaimers
        </p>
        <div>
          We provide our Services using a commercially reasonable level of skill
          and care and we hope that you will enjoy using them. But there are
          certain things that we don't promise about our Services.OTHER THAN AS
          EXPRESSLY SET OUT IN THESE TERMS OR ADDITIONAL TERMS, Loyalti DOES NOT
          MAKE ANY SPECIFIC PROMISES ABOUT THE SERVICES. SOME JURISDICTIONS
          PROVIDE FOR CERTAIN WARRANTIES, LIKE THE IMPLIED WARRANTY OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND,
          NON-INFRINGEMENT. TO THE EXTENT PERMITTED BY LAW, WE EXCLUDE ALL
          WARRANTIES.
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Limits on Liability
        </p>
        <div>
          We work hard to provide the best Products we can and to specify clear
          guidelines for everyone who uses them. However, THE SERVICE IS
          PROVIDED "AS IS". WE CAN NOT PREDICT WHEN ISSUES MIGHT ARISE WITH OUR
          SERVICES. ACCORDINGLY, OUR LIABILITY SHALL BE LIMITED TO THE FULLEST
          EXTENT PERMITTED BY APPLICABLE LAW, AND UNDER NO CIRCUMSTANCE WILL WE
          BE LIABLE TO YOU FOR ANY LOST PROFITS, REVENUES, INFORMATION, OR DATA,
          OR CONSEQUENTIAL, SPECIAL, INDIRECT, EXEMPLARY, PUNITIVE, OR
          INCIDENTAL DAMAGES ARISING OUT OF OR RELATED TO THESE TERMS OR THE
          Loyalti PRODUCTS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
          SUCH DAMAGES. YOUR USE AND/OR PURCHASE OF SERVICE ARE ALL AT YOUR SOLE
          RISK.
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          Business Uses of Our Services
        </p>
        <div>
          If you are using our Services on behalf of a business, that business
          accepts these terms. It will hold harmless and indemnify Loyalti and its
          affiliates, officers, agents, and employees from any claim, suit, or
          action arising from or related to the use of the Services or violation
          of these terms, including any liability or expense arising from
          claims, losses, damages, suits, judgments, litigation costs, and
          attorneys' fees.
        </div>
        <p className="text-center font-bold underline underline-offset-2 mt-2">
          About These Terms
        </p>
        <div>
          These terms control the relationship between Loyalti and you. They do
          not create any third-party beneficiary rights. If you do not comply
          with these terms, and we don't take action right away, this doesn't
          mean that we are giving up any rights that we may have (such as taking
          action in the future). If it turns out that a particular term is not
          enforceable, this will not affect any other terms.
        </div>
        <div className="font-light text-center my-4">© 2022 Loyalti Team</div>
      </div>
    </IonContent>
  </IonPage>
);

export default TermsOfUse;
