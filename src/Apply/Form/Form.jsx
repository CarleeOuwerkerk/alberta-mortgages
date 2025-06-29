import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Button, CleaveInput, Form, FormItem, Input, InputLabel, LabelText } from "./FormStyles";

const ApplicationForm = () => {
    const [inputs, setInputs] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const form = useRef();


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('inputs: ', inputs)

        emailjs
            .sendForm('mortgage_form_service', 'mortgage_form', form.current, {
                publicKey: 'lv690X8lD2yi2P0OK',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsFormSubmitted(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }

    if (!isFormSubmitted) {
        return (
            <Form ref={form} onSubmit={handleSubmit}>
                <FormItem>
                    <InputLabel>
                        <LabelText>
                            FIRST NAME
                        </LabelText>
                        <Input
                            type='text'
                            name='firstName'
                            required
                            value={inputs.firstName || ''}
                            onChange={handleChange}
                            title='Enter your first name.' />
                    </InputLabel>
                </FormItem>

                <FormItem>
                    <InputLabel>
                        <LabelText>
                            LAST NAME
                        </LabelText>
                        <Input
                            type='text'
                            name='lastName'
                            required
                            value={inputs.lastName || ''}
                            onChange={handleChange}
                            title='Enter your last name.' />
                    </InputLabel>
                </FormItem>

                <FormItem>
                    <InputLabel>
                        <LabelText>
                            PHONE NUMBER
                        </LabelText>

                        <CleaveInput
                            name='phoneNumber'
                            required
                            value={inputs.phoneNumber || ''}
                            onChange={handleChange}
                            title='Enter a valid phone number (in the form (xxx) xxx-xxxx).'
                            placeholder="(000) 000-0000"
                            options={{
                                delimiters: ['(', ') ', '-', ''],
                                blocks: [0, 3, 3, 4],
                                numericOnly: true
                            }}
                        />
                    </InputLabel>
                </FormItem>

                <FormItem>
                    <InputLabel>
                        <LabelText>
                            EMAIL
                        </LabelText>

                        <Input
                            type='email'
                            required
                            name='email'
                            value={inputs.email || ''}
                            onChange={handleChange} />
                    </InputLabel>
                </FormItem>

                <p>
                    Please note that you will be required to provide the following: <br />1. Proof of Title 2. Proof of Value (Appraisal or Tax Assessment) 3. Current Mortgage Balance
                </p>

                <FormItem>
                    <InputLabel>
                        <LabelText>
                            PROPERTY VALUE
                        </LabelText>

                        <CleaveInput
                            name='propertyValue'
                            required
                            value={inputs.propertyValue || ''}
                            onChange={handleChange}
                            title='Enter your property value.'
                            options={{
                                numeral: true,
                                numeralThousandsGroupStyle: 'thousand',
                                prefix: '$',
                                rawValueTrimPrefix: true,
                            }}
                        />
                    </InputLabel>
                </FormItem>

                <FormItem>
                    <InputLabel>
                        <LabelText>
                            MORTGAGE BALANCE
                        </LabelText>

                        <CleaveInput
                            name='mortgageBalance'
                            required
                            value={inputs.mortgageBalance || ''}
                            onChange={handleChange}
                            title='Enter your mortgage balance.'
                            options={{
                                numeral: true,
                                numeralThousandsGroupStyle: 'thousand',
                                prefix: '$',
                                rawValueTrimPrefix: true,
                            }}
                        />
                    </InputLabel>
                </FormItem>

                <Button type='submit'>SUBMIT</Button>
            </Form>
        )
    }

    else return (
        <div>
            Thank you for submitting your information! We will review everything shortly.
        </div>
    )
}

export default ApplicationForm;