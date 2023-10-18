import styled from "styled-components";
import SocialMedia from "../socialMedia/SocialMedia.jsx";
import {FormattedMessage} from "react-intl";
import {styleVariables} from "../../util/styleVariables.js";

const FooterStyled = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: ${styleVariables.colors.secondaryGradient};
  padding: 3rem 0;
  min-width: 20rem;
  min-height: 5rem;
  font-size: 2.4rem;
  @media (max-width: 79rem) {
    font-size: 2rem;
  }
  @media (max-width: 48rem) {
    font-size: 1.6rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`

const P = styled.p`
  text-transform: uppercase;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 10rem;
  align-items: center;

  &:first-child {
    align-items: start;
    @media (max-width: 48rem) {
      grid-row: 2 / 3;
    }
  }

  &:not(:first-child) {
    border-left: 1px solid rgba(255, 255, 255, 0.56);
  }

  &:nth-child(2) {
    @media (max-width: 48rem) {
      grid-column: 1 / -1;
      border-left: none;
    }
  }

  @media (max-width: 79rem) {
    padding: 1rem 5rem;
  }
  @media (max-width: 60rem) {
    padding: 1rem 2rem;
  }
`

const ContactContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const Img = styled.img`
  width: 15rem;
  height: 15rem;
  @media (max-width: 32rem) {
    width: 10rem;
    height: 10rem;
  }
`

const Svg = styled.svg`
  @media (max-width: 79rem) {
    width: 4rem;
    height: 4rem;
  }
`
export default function Footer({footer}) {
    return (
        <FooterStyled id="footer" ref={footer}>
            <Div>
                <P><FormattedMessage id="contact-me"/></P>
                <ContactContainer href="tel:+375296031515">
                    <Svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50"
                         viewBox="0 0 48 48">
                        <path fill="#71c598"
                              d="M10.106,44.273c5,0,3.611-0.064,8.11-0.069c3.752-0.004,6.202-0.362,8.892-0.209	c2.228,0.127,4.42,0.438,6.647,0.291c3.044-0.2,7.326,1.134,9.489-1.663c1.367-1.768,0.831-4.719,0.769-6.893	c-0.095-3.321,0.473-8.466,0.237-10.628c-0.611-5.605-0.437-7.204-0.208-12.838c0.083-2.056,0.352-4.888-0.935-6.492	c-1.24-1.545-3.227-2.06-6.598-2.017c-4.447,0.057-7.87,0.134-12.317,0.111c-1.699-0.009-3.553-0.098-5.253-0.106	c-1.371-0.007-4.453-0.215-5.824-0.193c-1.275,0.02-4.203,0.099-5.508,0.205C6.3,3.879,4.859,4.881,4.286,6.059	C4.041,6.561,3.971,7.126,3.842,7.67c-0.242,1.02-0.128,10.078-0.075,10.611c0.5,5,0.339,2.492,0.339,7.492	c0,1.388-0.323,3.712-0.335,6.362c-0.016,3.513-0.001,5.052,0.335,7.138C4.59,42.276,6.197,44.466,10.106,44.273"></path>
                        <path fill="#010101"
                              d="M38.463,44.933c-0.705,0-1.415-0.044-2.1-0.087c-0.923-0.058-1.795-0.111-2.576-0.06	c-1.62,0.105-3.236-0.024-4.798-0.151c-0.635-0.052-1.271-0.104-1.91-0.14c-1.465-0.084-2.853-0.015-4.46,0.069	c-1.274,0.064-2.718,0.139-4.402,0.14c-2.154,0.002-2.955,0.019-3.756,0.034c-0.872,0.018-1.745,0.035-4.342,0.035	c-3.712,0.177-5.897-1.646-6.506-5.421c-0.35-2.171-0.357-3.782-0.341-7.22c0.007-1.535,0.119-2.987,0.209-4.153	c0.067-0.876,0.126-1.632,0.126-2.206c0-1.278,0.01-2.067,0.018-2.616c0.017-1.225,0.017-1.225-0.161-2.929l-0.194-1.897	c-0.046-0.46-0.183-9.646,0.086-10.777c0.031-0.132,0.059-0.266,0.087-0.399c0.09-0.434,0.184-0.883,0.394-1.314	c0.654-1.343,2.257-2.444,3.729-2.564c1.344-0.109,4.368-0.188,5.541-0.207c0.763-0.012,2.049,0.046,3.285,0.103	c0.987,0.044,1.938,0.088,2.549,0.091c0.854,0.005,1.746,0.029,2.638,0.054c0.884,0.024,1.769,0.049,2.615,0.053	c3.392,0.016,6.129-0.023,9.298-0.069l3.01-0.042c3.67-0.065,5.701,0.592,6.995,2.204c1.29,1.606,1.168,4.183,1.07,6.253	l-0.099,2.303c-0.185,4.303-0.261,6.084,0.279,11.032c0.13,1.193,0.026,3.216-0.084,5.356c-0.095,1.859-0.194,3.782-0.15,5.312	c0.011,0.404,0.04,0.834,0.068,1.279c0.133,2.038,0.284,4.349-0.942,5.934C42.354,44.592,40.425,44.933,38.463,44.933z M34.47,43.766c0.624,0,1.276,0.04,1.955,0.082c2.457,0.155,5,0.311,6.422-1.529c0.994-1.286,0.856-3.396,0.735-5.257	c-0.03-0.458-0.059-0.9-0.071-1.315c-0.044-1.57,0.055-3.513,0.152-5.393c0.108-2.1,0.21-4.083,0.088-5.195	c-0.548-5.024-0.471-6.828-0.284-11.185l0.099-2.307c0.09-1.901,0.202-4.269-0.852-5.581c-1.076-1.341-2.859-1.879-6.202-1.829	l-3.008,0.042c-3.175,0.046-5.918,0.086-9.318,0.069c-0.854-0.005-1.746-0.029-2.638-0.054c-0.884-0.024-1.769-0.049-2.615-0.053	c-0.62-0.003-1.587-0.047-2.589-0.093c-1.22-0.055-2.477-0.11-3.224-0.101c-1.163,0.019-4.156,0.096-5.476,0.203	C6.518,4.364,5.239,5.245,4.735,6.277C4.58,6.597,4.502,6.967,4.421,7.358c-0.03,0.143-0.06,0.285-0.093,0.427	c-0.211,0.887-0.139,9.694-0.064,10.446l0.193,1.894c0.182,1.746,0.183,1.774,0.166,3.045c-0.007,0.547-0.018,1.331-0.018,2.604	c0,0.612-0.06,1.387-0.129,2.283c-0.093,1.21-0.199,2.581-0.206,4.08c-0.017,3.612,0.006,5.055,0.329,7.058	c0.521,3.236,2.292,4.724,5.482,4.58l0.024-0.001c2.595,0,3.465-0.018,4.334-0.035c0.806-0.016,1.611-0.032,3.775-0.034	c1.66-0.001,3.09-0.074,4.353-0.139c1.636-0.084,3.048-0.156,4.568-0.068c0.647,0.037,1.291,0.089,1.934,0.141	c1.597,0.131,3.104,0.251,4.652,0.15C33.966,43.772,34.216,43.766,34.47,43.766z"></path>
                        <path fill="#d6e5e5"
                              d="M20.665,25.639c1.18,1.041,2.361,2.082,3.541,3.122c0.607,0.535,2.275,2.097,3.081,2.159	c1.156,0.089,3.066-1.841,4.212-2.015c0.821-0.124,2.26,0.624,3,1c0.93,0.473,1.35,0.924,2.175,1.617	c1.096,0.922,1.247,1.844,1.115,2.84c-0.082,0.623-0.528,1.13-0.982,1.564c-0.617,0.589-1.468,1.392-2.292,1.611	c-1.271,0.337-2.546,0.125-3.77-0.356c-1.86-0.731-3.991-1.621-5.663-2.714c-2.594-1.695-6.645-5.145-8.582-7.563	c-3.28-4.095-4.289-6.04-6-11c-0.331-0.958-0.41-3.073,0-4c0.386-0.873,1.192-2.014,2.074-2.38c0.429-0.178,0.88-0.334,1.344-0.327	c0.976,0.015,1.782,0.727,2.492,1.397c1.318,1.245,2.727,2.676,2.827,4.487c0.076,1.379-0.636,2.667-1.362,3.841	c-0.229,0.371-0.468,0.754-0.526,1.187c-0.067,0.495,0.112,0.987,0.308,1.446C18.351,23.179,19.485,24.329,20.665,25.639"></path>
                        <path fill="#010101"
                              d="M33.231,38.204c-0.841,0-1.724-0.185-2.669-0.557c-1.994-0.783-4.07-1.661-5.753-2.76	c-2.589-1.691-6.702-5.177-8.699-7.669c-3.229-4.031-4.31-6.011-6.083-11.149c-0.378-1.096-0.445-3.325,0.016-4.365	c0.45-1.017,1.347-2.228,2.339-2.64c0.444-0.185,0.977-0.358,1.543-0.365c1.13,0.019,2.017,0.768,2.828,1.534	c1.45,1.37,2.875,2.872,2.982,4.822c0.085,1.53-0.696,2.936-1.435,4.132c-0.214,0.347-0.412,0.667-0.456,0.99	c-0.046,0.346,0.075,0.723,0.272,1.184c0.589,1.377,1.544,2.429,2.556,3.542l0.344,0.38l3.726,3.287	c0.5,0.447,2.023,1.809,2.583,1.853c0.483,0.032,1.328-0.523,2.021-0.974c0.748-0.484,1.454-0.942,2.078-1.037	c0.877-0.128,2.132,0.453,3.234,1.015c0.86,0.438,1.31,0.827,1.878,1.32l0.459,0.394c1.375,1.156,1.411,2.365,1.289,3.289	c-0.104,0.784-0.63,1.38-1.133,1.859c-0.617,0.589-1.55,1.479-2.51,1.732C34.184,38.144,33.714,38.204,33.231,38.204z M13.887,9.699	c-0.375,0-0.76,0.139-1.121,0.289c-0.701,0.291-1.44,1.287-1.809,2.12c-0.345,0.78-0.282,2.772,0.016,3.635	c1.746,5.061,2.742,6.886,5.917,10.851c1.937,2.418,5.941,5.808,8.465,7.456c1.608,1.051,3.628,1.903,5.573,2.668	c1.283,0.505,2.413,0.613,3.459,0.337c0.712-0.188,1.532-0.971,2.075-1.488c0.376-0.359,0.769-0.791,0.832-1.268	c0.114-0.865-0.002-1.603-0.941-2.393l-0.471-0.404c-0.537-0.466-0.925-0.802-1.609-1.15c-0.664-0.338-2.055-1.045-2.699-0.951	c-0.411,0.062-1.058,0.482-1.684,0.888c-0.904,0.587-1.848,1.214-2.642,1.131c-0.828-0.063-2.072-1.119-3.173-2.104l-3.783-3.341	l-0.361-0.398c-1.07-1.178-2.08-2.29-2.735-3.822c-0.227-0.53-0.425-1.104-0.344-1.709c0.072-0.535,0.348-0.981,0.591-1.375	c0.694-1.124,1.361-2.317,1.292-3.56c-0.088-1.584-1.313-2.867-2.671-4.15c-0.696-0.657-1.385-1.248-2.157-1.261	C13.902,9.699,13.895,9.699,13.887,9.699z"></path>
                    </Svg>
                    <p>+375 (29) 603-15-15</p>
                </ContactContainer>
                <ContactContainer href="mailto:maratos2001@mail.ru">
                    <Svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                        <path fill="#74cccf"
                              d="M3.578,9.909c0.472,7.277,0.173,6.212,0.173,11.56c0,0.881,0.346,3.822,0.318,4.703	c-0.109,3.437-0.072,4.781,0.07,6.946c0.195,2.96-0.579,9.146,0.995,10.044c2.522,1.438,4.894,1.047,7.006,1.152	c2.112,0.105,8.099-0.453,11.056-0.482c4.98-0.049,6.211-0.271,11.689-0.048c1.999,0.081,3.642-0.249,5.628-0.487	c1.995-0.239,3.586-2.382,3.586-6.757c0-4.324-0.773-4.787-0.961-9.239c-0.176-4.169,0.334-5.67,0.343-7.322	c0.007-1.333,0.049-3.754,0.027-5.087c-0.02-1.24,0.118-4.974,0.015-6.243s-0.422-3.263-2.044-4.105	c-0.482-0.25-1.026-0.373-1.566-0.432c-2.556-0.28-7.919,0.791-8.438,0.843c-4.861,0.486-4.633-0.095-9.494-0.095	c-1.349,0-5.685,0.122-7.034,0.095c-3.415-0.07-5.234-0.068-6.32,0C4.456,5.215,3.578,6.992,3.578,9.909"></path>
                        <path fill="#010101"
                              d="M12.767,44.826c-0.243,0-0.461-0.004-0.651-0.014c-0.442-0.022-0.893-0.024-1.361-0.021	c-1.782-0.006-3.768,0.002-5.867-1.196c-1.285-0.732-1.325-3.383-1.241-7.343c0.025-1.169,0.049-2.274-0.006-3.102	c-0.146-2.212-0.178-3.602-0.07-6.995c0.014-0.444-0.082-1.541-0.166-2.509c-0.078-0.899-0.152-1.749-0.152-2.177	c0-1.743,0.031-2.807,0.058-3.7c0.055-1.831,0.088-2.936-0.229-7.828L3.078,9.909c0-3.066,0.938-5.167,5.518-5.453	c1.127-0.07,2.969-0.071,6.361-0.001c0.78,0.018,2.622-0.02,4.245-0.051C20.357,4.38,21.423,4.36,21.98,4.36	c1.978,0,3.106,0.094,4.102,0.177c1.441,0.118,2.481,0.206,5.343-0.08c0.091-0.009,0.337-0.052,0.693-0.112	c1.704-0.289,5.69-0.967,7.85-0.73c0.688,0.075,1.258,0.234,1.742,0.485c2.03,1.054,2.242,3.654,2.312,4.508	c0.068,0.831,0.036,2.611,0.009,4.182c-0.016,0.868-0.029,1.646-0.022,2.094c0.015,0.906,0,2.314-0.013,3.544l-0.014,1.552	c-0.003,0.596-0.067,1.164-0.143,1.821c-0.141,1.239-0.315,2.782-0.201,5.477c0.087,2.059,0.299,3.24,0.505,4.382	c0.235,1.307,0.457,2.542,0.457,4.877c0,4.239-1.505,6.951-4.026,7.253c-0.456,0.055-0.895,0.114-1.323,0.172	c-1.442,0.196-2.811,0.379-4.386,0.317c-3.646-0.147-5.414-0.098-7.651-0.034c-1.119,0.032-2.359,0.067-4.012,0.083	c-1.309,0.013-3.256,0.133-5.139,0.249C16.008,44.705,14.049,44.826,12.767,44.826z M10.882,43.791c0.437,0,0.865,0.002,1.282,0.022	c1.143,0.059,3.527-0.09,5.837-0.232c1.896-0.117,3.855-0.237,5.19-0.25c1.645-0.016,2.879-0.051,3.993-0.083	c2.256-0.064,4.037-0.115,7.721,0.035c1.494,0.064,2.813-0.119,4.21-0.309c0.434-0.059,0.877-0.119,1.339-0.175	c1.97-0.236,3.146-2.577,3.146-6.26c0-2.246-0.215-3.438-0.441-4.7c-0.211-1.175-0.43-2.39-0.521-4.518	c-0.116-2.772,0.063-4.358,0.208-5.632c0.071-0.629,0.133-1.172,0.136-1.713l0.014-1.558c0.013-1.221,0.027-2.618,0.013-3.518	c-0.007-0.456,0.007-1.246,0.022-2.128c0.026-1.471,0.059-3.301-0.005-4.083c-0.102-1.246-0.396-2.985-1.776-3.702	c-0.372-0.193-0.827-0.317-1.391-0.378c-2.017-0.22-5.912,0.44-7.573,0.722c-0.391,0.066-0.661,0.111-0.761,0.122	c-2.951,0.295-4.088,0.2-5.524,0.081c-0.977-0.081-2.083-0.173-4.02-0.173c-0.554,0-1.611,0.021-2.759,0.043	c-1.633,0.032-3.482,0.069-4.285,0.052C11.618,5.386,9.74,5.386,8.658,5.454c-3.843,0.24-4.577,1.745-4.58,4.439	c0.319,4.925,0.286,6.048,0.23,7.906c-0.026,0.886-0.058,1.941-0.058,3.67c0,0.385,0.075,1.252,0.148,2.09	c0.091,1.044,0.186,2.125,0.17,2.628c-0.106,3.352-0.075,4.722,0.068,6.898c0.058,0.871,0.033,1.997,0.008,3.189	c-0.051,2.374-0.127,5.96,0.736,6.453c1.869,1.066,3.68,1.075,5.371,1.064C10.796,43.791,10.839,43.791,10.882,43.791z"></path>
                        <path fill="#d6e5e5"
                              d="M24.643,13.769c-4.486,0.055-8.805-0.277-13.457,0.164c-0.515,0.049-1.067,0.022-1.497,0.311	c-0.658,0.441-0.792,1.337-0.853,2.127c-0.37,4.768-0.272,9.572,0.289,14.321c0.136,1.15,0.418,2.473,1.453,2.994	c0.477,0.24,1.031,0.257,1.565,0.269c3.561,0.081,7.122,0.162,10.683,0.243c4.162,0.095,8.33,0.189,12.484-0.091	c0.815-0.055,1.678-0.142,2.327-0.638c0.839-0.64,1.094-1.779,1.206-2.828c0.284-2.664,0.016-5.352-0.252-8.018	c-0.198-1.968-0.396-3.937-0.594-5.905c-0.099-0.979-0.258-2.072-1.039-2.67c-0.478-0.366-1.098-0.594-1.699-0.551	C31.426,13.777,28.349,13.418,24.643,13.769"></path>
                        <path fill="#010101"
                              d="M29.092,34.792c-2.11,0-4.212-0.048-6.278-0.095l-10.683-0.243c-0.53-0.012-1.191-0.027-1.777-0.323	c-1.25-0.628-1.578-2.137-1.725-3.381c-0.565-4.778-0.663-9.629-0.291-14.418c0.046-0.61,0.144-1.88,1.072-2.503	c0.457-0.308,0.979-0.342,1.439-0.372l0.289-0.021c3.127-0.297,6.144-0.246,9.063-0.198c1.466,0.025,2.931,0.05,4.414,0.032	c1.969-0.185,3.795-0.173,5.562-0.162c1.602,0.011,3.248,0.021,5.043-0.109c0.687-0.053,1.433,0.188,2.039,0.652	c0.931,0.711,1.124,1.931,1.232,3.018l0.595,5.904c0.268,2.65,0.543,5.39,0.252,8.122c-0.113,1.066-0.374,2.39-1.4,3.172	c-0.747,0.57-1.692,0.678-2.596,0.739C33.268,34.746,31.176,34.792,29.092,34.792z M16.847,14.201c-1.836,0-3.709,0.05-5.614,0.23	l-0.318,0.024c-0.366,0.024-0.713,0.046-0.947,0.204c-0.462,0.31-0.577,1.024-0.632,1.75c-0.367,4.726-0.271,9.511,0.286,14.225	c0.118,0.996,0.358,2.191,1.182,2.605c0.386,0.194,0.876,0.206,1.352,0.216l10.683,0.243c4.083,0.093,8.306,0.19,12.439-0.09	c0.782-0.053,1.529-0.134,2.058-0.536c0.722-0.551,0.92-1.616,1.012-2.483c0.28-2.628,0.01-5.316-0.252-7.915l-0.595-5.905	c-0.092-0.919-0.232-1.855-0.846-2.324c-0.409-0.313-0.929-0.474-1.359-0.449c-1.833,0.134-3.504,0.122-5.122,0.112	c-1.827-0.011-3.556-0.023-5.482,0.159l-0.041,0.002c-1.496,0.019-2.98-0.006-4.463-0.031C19.087,14.22,17.974,14.201,16.847,14.201	z M24.643,13.77h0.01H24.643z"></path>
                        <path fill="#010101"
                              d="M23.659,28.01c-0.138,0-0.279-0.006-0.428-0.017c-1.835-0.141-3.314-1.402-4.558-2.573	c-3.367-3.172-6.503-6.636-9.323-10.294c-0.168-0.219-0.128-0.533,0.091-0.701c0.221-0.17,0.533-0.128,0.702,0.091	c2.787,3.617,5.888,7.041,9.216,10.177c1.118,1.054,2.438,2.188,3.948,2.303c1.521,0.113,2.241-0.509,3.433-1.545l0.396-0.343	c2.324-1.991,4.567-4.982,6.737-7.875c0.942-1.257,1.833-2.444,2.695-3.501c0.176-0.213,0.491-0.245,0.704-0.071	c0.214,0.174,0.245,0.489,0.071,0.704c-0.851,1.041-1.734,2.22-2.671,3.468c-2.202,2.936-4.479,5.972-6.887,8.035l-0.391,0.337	C26.248,27.205,25.322,28.01,23.659,28.01z"></path>
                        <path fill="#010101"
                              d="M37.695,33.304c-0.097,0-0.193-0.028-0.279-0.085c-1.85-1.247-3.267-2.954-4.768-4.76	c-1.162-1.4-2.363-2.847-3.857-4.194c-0.205-0.185-0.222-0.501-0.036-0.706c0.186-0.205,0.501-0.221,0.706-0.036	c1.547,1.395,2.772,2.871,3.957,4.298c1.453,1.75,2.826,3.403,4.557,4.57c0.229,0.154,0.29,0.465,0.136,0.694	C38.014,33.227,37.855,33.304,37.695,33.304z"></path>
                        <path fill="#010101"
                              d="M9.982,33.713c-0.114,0-0.229-0.039-0.322-0.118c-0.211-0.178-0.238-0.494-0.06-0.705l0.455-0.543	c1.176-1.406,2.508-3,3.915-4.074c0.682-0.519,3.117-3.542,3.191-4.164c0.03-0.265,0.268-0.48,0.533-0.459	c0.267,0.019,0.473,0.225,0.466,0.492c-0.028,1.091-2.987,4.472-3.584,4.927c-1.318,1.007-2.612,2.555-3.755,3.921l-0.458,0.546	C10.266,33.653,10.124,33.713,9.982,33.713z"></path>
                    </Svg>
                    <p>maratos2001@mail.ru</p>
                </ContactContainer>
            </Div>
            <Div>
                <Img src="/img/Logo.png" alt="Crescent dev logo"/>
                <SocialMedia iconSize={50}/>
            </Div>
            <Div>
                <P><FormattedMessage id="build"/></P>
                <P><FormattedMessage id="name"/></P>
            </Div>
        </FooterStyled>
    )
}