import Layout from "../../layout/Layout"
import { Link } from "react-router-dom"

const TermOfUse = () => {
  return (
    <Layout>

    <main className="w-full h-full px-4 md:px-6 xl:px-10 mb-[120px]">
        <div className="w-full h-full pt-[120px]">
            <div className="w-full h-full  text-center"> 
            <h1 className="w-full h-full  text-[25px] font-semibold">Terms of Use Agreement</h1>
            <p>Last Modify Date: October 7th, 2023 </p>
        </div>

        {/* agreement section */}
        <div className="w-full h-full mt-[70px]">
            <div className="w-full h-full">
                <h2 className="font-semibold text-[20px]">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">By using www.easereads.com , you agree to comply with and be bound by these Terms of Use (&quot;Agreement&quot;) If you do not agree to these terms, please do not use the Website.</p>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">2. Changes to Terms</h2>
                <p className="text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">We reserve the right to modify, amend, or update these Terms of Use at any time without notice. Your continued use of the Website after any changes shall constitute your consent to such changes.</p>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">3. Use of Website</h2>
                <ul className="list-disc ml-[50px] text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">
                    <li >You may use the Website for educational and informational purposes only.</li>
                    <li className="mt-[5px]">You must not use the Website in any way that violates any applicable laws or regulations.</li>
                    <li className="mt-[5px]">You must not attempt to gain unauthorized access to any part of the Website.</li>
                </ul>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">4. Intellectual Property</h2>
                <ul className="list-disc ml-[50px] text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">
                    <li >All content on the Website, including but not limited to text, graphics, images, and software, is owned by or licensed to us and is protected by copyright and other intellectual property rights.</li>
                    <li className="mt-[5px]">You may access, download, and print content for personal, non-commercial use only. Any other use requires our prior written consent.</li>
                </ul>
            </div>

             <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">5. User Accounts</h2>
                <ul className="list-disc ml-[50px] text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">
                    <li >You may be required to create a user account to access certain features of the Website.</li>
                    <li className="mt-[5px]">You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
                    <li className="mt-[5px]">You agree to notify us immediately of any unauthorized use of your account.</li>
                </ul>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">6. Content Submission</h2>
                <ul className="list-disc ml-[50px] text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">
                    <li >If you submit any content to the Website, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and worldwide right to use, reproduce, modify, distribute, and display the content.</li>
                    <li className="mt-[5px]">You must not submit content that violates any third-party rights or contains harmful, illegal, or offensive materials.</li>
                </ul>
            </div>

             <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">7. Termination</h2>
                <p className="text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">We may, in our sole discretion, terminate or suspend your access to the Website without notice for any reason, including a breach of these Terms of Use.</p>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">8. Privacy Policy</h2>
                <p className="text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">Your use of the Website is also governed by our  
                 <Link to="/privacy-policy" smooth="true" duration={500} className="font-bold text-gray-900 ml-[4px] ">
                  Privacy Policy.
                 </Link>
                 </p>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">9. Disclaimer</h2>
                <ul className="list-disc ml-[50px] text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">
                    <li >The Website and its content are provided &quot;as is&quot; without any warranties of any kind.</li>
                    <li className="mt-[5px]">We do not guarantee the accuracy, completeness, or timeliness of the content on the Website.</li>
                    <li className="mt-[5px]">We are not responsible for any errors or omissions on the Website.</li>
                </ul>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">10. Limitation of Liability</h2>
                <ul className="list-disc ml-[50px] text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">
                    <li >To the extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use or inability to use the Website.</li>
                    <li className="mt-[5px]">Our total liability for any claims arising under this Agreement shall not exceed the amount you paid, if any, to access the Website.</li>
                </ul>
            </div>

             <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">11. Governing Law</h2>
                <p className="text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">This Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction].</p>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">12. Contact Information</h2>
                <p className="text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">If you have any questions or concerns about these Terms of Use, please contact us at 09064766113 or easereads@gmail.com.</p>
            </div>
        </div>
        </div>
        
    </main>
    </Layout>

  )
}

export default TermOfUse