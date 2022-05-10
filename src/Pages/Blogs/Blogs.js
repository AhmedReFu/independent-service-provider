import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='mt-3'> 1. Difference between authorization and authentication ? </h2>
            <h5 className='mt-4'>
                Authentication: কাউকে , কোনো কিছু , কারো কোনো act (যা সঠিক বলে দাবি করা হচ্ছে ) প্রকৃত পক্ষে তা সত্য কিনা তা নির্ণয় করার  প্রক্রিয়া ।

                Authorization : কাউকে কোনো কাজ করার জন্য বা কোনো recourse ব্যবহার করতে পারার পারমিশন দেওয়া ।
            </h5>

            <h2 className='mt-3'>2. Why are you using firebase? What other options do you have to implement authentication? </h2>
            <h5 className='mt-4'> by firebase we can build authentication system easily , and you can deploy your site in firebase and do many more things , the alternative  of firebase is :
                Parse. Parse is a complete open-source application stack and backend framework that offers a collection of tools and
                features to help you develop your apps. ...
                Back4App. ...
                AWS Amplify. ...
                Kuzzle. ...
                Couchbase. ...
                NativeScript. ...
                RxDB. ...
                Flutter.

            </h5>
            <h2 className='mt-3'>3. What other services does firebase provide other than authentication </h2>
            <h5 className='mt-4'>
                <ul>
                    <li>
                        Cloud Messaging
                    </li>
                    <li>
                        Firebase ML
                    </li>

                    <li>
                        Realtime database
                    </li>

                    <li> Hosting </li>

                    <li>Storage</li>
                    <li>Remote Config</li>
                    <li>A/B Testing</li>
                    <li>Performance</li>
                    <li>Dashboard etc...</li>

                </ul>
            </h5>
        </div>
    );
};

export default Blogs;