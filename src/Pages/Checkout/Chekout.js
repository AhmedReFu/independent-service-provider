import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Chekout = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div className='container'>
            <h2>This is our Food Order Form</h2>
            <form class="row g-3">
                <div class="col-md-4">
                    <label for="validationDefault01" class="form-label">First name</label>
                    <input type="text" class="form-control" id="validationDefault01" required />
                </div>
                <div class="col-md-4">
                    <label for="validationDefault02" class="form-label">Last name</label>
                    <input type="text" class="form-control" id="validationDefault02" required />
                </div>
                <div class="col-md-4">
                    <label for="email" class="form-label">Email</label>
                    <div class="input-group">
                        <input type="email" class="form-control" id="validationDefaultUsername" value={user?.user?.displayName} aria-describedby="inputGroupPrepend2" required />
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="validationDefault03" required />
                </div>
                <div class="col-md-3">
                    <label for="validationDefault04" class="form-label">Order</label>
                    <select class="form-select" id="validationDefault04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Lunch</option>
                        <option>Drink</option>
                        <option>BreakFast</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="validationDefault05" class="form-label">Phone Number</label>
                    <input type="number" class="form-control" id="validationDefault05" required />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label class="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    );
};

export default Chekout;