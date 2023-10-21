import Layout from "../../layout/Layout"

const PrivacyPolicy = () => {
  return (
     <Layout>

    <main className="w-full h-full px-4 md:px-6 xl:px-10 mb-[120px]">
        <div className="w-full h-full pt-[120px]">
            <div className="w-full h-full  text-center"> 
            <h1 className="w-full h-full  text-[25px] font-semibold">Privacy Policy</h1>
            <p>Last Modify Date: October 7th, 2023 </p>

            <p className="mt-[40px]">Welcome to easereads.com. We respect your privacy and are committed to protecting it through our compliance with this privacy policy. This policy explains how we collect, use, disclose, and protect your personal information when you use our website or services.</p>
        </div>

        {/* agreement section */}
        <div className="w-full h-full mt-[70px]">
            <div className="w-full h-full">
                <h2 className="font-semibold text-[20px] mt-[5px]">Information We Collect</h2>
                <p>We collect information from and about users of our website, including:</p>
                <ul className="list-disc ml-[50px] text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">
                    <li className="font-bold">Personal Information: <span className="font-normal">
                        We may collect personal information that you provide directly to us, such as your name, email address, phone Number, and password when you create an account.
                        </span> 
                        </li>
                    <li className="font-bold mt-[5px]">Usage Information:  <span className="font-normal">
                       We may collect information about your usage of our website, including the pages you visit, the content you view, and other actions you take.
                        </span> 
                        </li>
                        <li className="font-bold mt-[5px]">Device Information:  <span className="font-normal">
                        We may collect information about your device, such as your IP address, browser type, and operating system.
                        </span> 
                        </li>
                </ul>
            </div>

             <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px] ">How We Use Your Information</h2>
                <p>We may use your personal information for various purposes, including but not limited to:</p>
                <ul className="list-disc ml-[50px] text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">
                   <li >To provide access to educational content and resources on our website.</li>
                    <li className="mt-[5px]">To personalize your experience and tailor content to your preferences.</li>
                    <li className="mt-[5px]">To communicate with you about updates, promotions, and educational materials.</li>
                    <li className="mt-[5px]">To improve our website&apos;s functionality, content, and user experience.</li>
                </ul>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px] ">Disclosure of Your Information</h2>
                <p>We may share your personal information with:</p>
                <ul className="list-disc ml-[50px] text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">
                   <li className="font-bold">Service Providers: <span className="font-normal">
                        We may share your information with third-party service providers who assist us in providing and improving our services.
                        </span> 
                        </li>
                    <li className="font-bold mt-[5px]">Legal Requirements:   <span className="font-normal">
                       We may disclose your information to comply with legal obligations, such as responding to subpoenas or court orders.
                        </span> 
                        </li>
                        <li className="font-bold mt-[5px]">Business Transfers:  <span className="font-normal">
                        In the event of a merger, acquisition, or sale of all or part of our assets, your personal information may be transferred as part of the transaction.
                        </span> 
                        </li>
                </ul>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px] ">Your Choices</h2>
                <p>You can make certain choices regarding your personal information:</p>
                <ul className="list-disc ml-[50px] text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">
                   <li className="font-bold">Access and Correction: <span className="font-normal">
                        You can review and update your personal information by logging into your account.
                        </span> 
                        </li>
                    <li className="font-bold mt-[5px]">Marketing Communications:   <span className="font-normal">
                       You can opt out of receiving marketing emails from us by following the instructions provided in the emails.
                        </span> 
                        </li>
                       
                </ul>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">Data Security</h2>
                <p className="text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, please be aware that no security measures are perfect.</p>
            </div>

            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">Changes to Our Privacy Policy</h2>
                <p className="text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, please be aware that no security measures are perfectWe may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
            </div>


            <div className="w-full h-full mt-[50px]">
                <h2 className="font-semibold text-[20px]">Contact Information</h2>
                <p className="text-gray-700 mt-[15px] text-[16px]  md:text-[18px]">if you have any questions, comments, or concerns about this privacy policy or our privacy practices, please contact us at 09064766113 or easereads@gmail.com.</p>
            </div>
        </div>
        </div>
        
    </main>
     </Layout> 

  )
}

export default PrivacyPolicy