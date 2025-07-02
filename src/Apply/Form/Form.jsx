import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Button, CleaveInput, Form, FormItem, Input, InputLabel, LabelText, FormConfirmation, Select } from "./FormStyles";

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
                            pattern="\(\d{3}\) \d{3}-\d{4}"
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
                            pattern="^\$\d{1,3}(,\d{3})*(\.\d{0,2})?$|^\$\d+(\.\d{0,2})?$"
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
                            PROPERTY TYPE
                        </LabelText>

                        <Select name="propertyType" value={inputs.propertyType || ''} onChange={handleChange} required>
                            <option style={{ display: 'none' }}></option>
                            <option value="single-family home">Single-Family Home</option>
                            <option value="condo">Condo</option>
                            <option value="townhouse">Townhouse</option>
                            <option value="duplex">Duplex</option>
                            <option value="other">Other</option>
                        </Select>

                    </InputLabel>
                </FormItem>

                <FormItem hidden={inputs.propertyType !== "other"} isWideField={true}>
                    <InputLabel>
                        <LabelText>
                            OTHER PROPERTY TYPE
                        </LabelText>

                        <Input
                            type='text'
                            name='otherPropertyType'
                            required={inputs.propertyType === "other"}
                            disabled={inputs.propertyType !== "other"}
                            isWideField={inputs.propertyType === "other"}
                            value={inputs.otherPropertyType || ''}
                            onChange={handleChange}
                            title='Please specify your other property type.' />
                    </InputLabel>
                </FormItem>

                <FormItem>
                    <InputLabel>
                        <LabelText>
                            CURRENT MORTGAGE BALANCE
                        </LabelText>

                        <CleaveInput
                            name='mortgageBalance'
                            required
                            pattern="^\$\d{1,3}(,\d{3})*(\.\d{0,2})?$|^\$\d+(\.\d{0,2})?$"
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

                <FormItem>
                    <InputLabel>
                        <LabelText>
                            REQUESTED LOAN AMOUNT
                        </LabelText>

                        <CleaveInput
                            name='requestedLoanAmount'
                            required
                            pattern="^\$\d{1,3}(,\d{3})*(\.\d{0,2})?$|^\$\d+(\.\d{0,2})?$"
                            value={inputs.requestedLoanAmount || ''}
                            onChange={handleChange}
                            title='Enter your requested loan amount.'
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
        <FormConfirmation>
            <p>
                Thank you for submitting the form!
            </p>
            <p>
                We will review your information and respond within 48 hours.
            </p>
        </FormConfirmation>
    )
}

export default ApplicationForm;