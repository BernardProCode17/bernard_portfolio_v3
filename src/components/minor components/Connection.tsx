import SocialConnections from "./SocialConnections";

export default function Connection({linkClass}: {linkClass?: string}) {

   return (
      <section className="connection section">
         <h2 className="connection_title">Connection</h2>
         <p className="connection_content">Get in contact with for Work or collaboration</p>

         <SocialConnections divClass1="social_connection_container" divClass2="social_connection" />
      </section>
   )
}