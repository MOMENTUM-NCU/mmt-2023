export default function getHtml(name) {
  return `
    <!DOCTYPE html>
<html lang="it">
  <head>
    <title>Thank You Mail Template</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />

    <style type="text/css">
      #ko_onecolumnBlock_1 .textintenseStyle a,
      #ko_onecolumnBlock_1 .textintenseStyle a:link,
      #ko_onecolumnBlock_1 .textintenseStyle a:visited,
      #ko_onecolumnBlock_1 .textintenseStyle a:hover {
        color: #ffffff;
        text-decoration: none;
        font-weight: bold;
        text-decoration: none;
      }

      #ko_onecolumnBlock_1 .textlightStyle a,
      #ko_onecolumnBlock_1 .textlightStyle a:link,
      #ko_onecolumnBlock_1 .textlightStyle a:visited,
      #ko_onecolumnBlock_1 .textlightStyle a:hover {
        color: #3f3d33;
        text-decoration: none;
        font-weight: bold;
      }
    </style>

    <style type="text/css">
      /* CLIENT-SPECIFIC STYLES */
      #outlook a {
        padding: 0;
      } /* Force Outlook to provide a "view in browser" message */
      .ReadMsgBody {
        width: 100%;
      }
      .ExternalClass {
        width: 100%;
      } /* Force Hotmail to display emails at full width */
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      } /* Force Hotmail to display normal line spacing */
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      } /* Prevent WebKit and Windows mobile changing default text sizes */
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      } /* Remove spacing between tables in Outlook 2007 and up */
      img {
        -ms-interpolation-mode: bicubic;
      } /* Allow smoother rendering of resized image in Internet Explorer */

      /* RESET STYLES */
      body {
        margin: 0;
        padding: 0;
      }
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }
      table {
        border-collapse: collapse !important;
      }
      body {
        height: 100% !important;
        margin: 0;
        padding: 0;
        width: 100% !important;
      }

      /* iOS BLUE LINKS */
      .appleBody a {
        color: #68440a;
        text-decoration: none;
      }
      .appleFooter a {
        color: #999999;
        text-decoration: none;
      }

      /* MOBILE STYLES */
      @media screen and (max-width: 525px) {
        /* ALLOWS FOR FLUID TABLES */
        table[class="wrapper"] {
          width: 100% !important;
          min-width: 0px !important;
        }

        /* USE THESE CLASSES TO HIDE CONTENT ON MOBILE */
        td[class="mobile-hide"] {
          display: none;
        }

        img[class="mobile-hide"] {
          display: none !important;
        }

        img[class="img-max"] {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }

        /* FULL-WIDTH TABLES */
        table[class="responsive-table"] {
          width: 100% !important;
        }

        /* UTILITY CLASSES FOR ADJUSTING PADDING ON MOBILE */
        td[class="padding"] {
          padding: 10px 5% 15px 5% !important;
        }

        td[class="padding-copy"] {
          padding: 10px 5% 10px 5% !important;
          text-align: center;
        }

        td[class="padding-meta"] {
          padding: 30px 5% 0px 5% !important;
          text-align: center;
        }

        td[class="no-pad"] {
          padding: 0 0 0px 0 !important;
        }

        td[class="no-padding"] {
          padding: 0 !important;
        }

        td[class="section-padding"] {
          padding: 10px 15px 10px 15px !important;
        }

        td[class="section-padding-bottom-image"] {
          padding: 10px 15px 0 15px !important;
        }

        /* ADJUST BUTTONS ON MOBILE */
        td[class="mobile-wrapper"] {
          padding: 10px 5% 15px 5% !important;
        }

        table[class="mobile-button-container"] {
          margin: 0 auto;
          width: 100% !important;
        }

        a[class="mobile-button"] {
          width: 80% !important;
          padding: 15px !important;
          border: 0 !important;
          font-size: 16px !important;
        }
      }
    </style>
  </head>
  <body style="margin: 0; padding: 0" bgcolor="#ffffff" align="center">
    <!-- PREHEADER -->

    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      id="ko_imageBlock_1"
    >
      <tbody>
        <tr class="row-a">
          <td
            bgcolor="#6f0152"
            align="center"
            class="no-pad"
            style="
              padding-top: 0px;
              padding-left: 15px;
              padding-bottom: 0px;
              padding-right: 15px;
            "
          >
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="500"
              class="responsive-table"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <!-- HERO IMAGE -->
                            <table
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <tbody>
                                <tr>
                                  <td class="no-padding">
                                    <table
                                      width="100%"
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                    >
                                      <tbody>
                                        <tr>
                                          <td>
                                            <a
                                              target="_new"
                                              href="https://mosaico.io/files/xxpjish/dl_beatsnoop_com-600px-1664894569.jpg"
                                              ><img
                                                width="500"
                                                border="0"
                                                alt="THANK YOU!"
                                                class="img-max"
                                                style="
                                                  display: block;
                                                  padding: 0;
                                                  color: #3f3d33;
                                                  text-decoration: none;
                                                  font-family: Helvetica, Arial,
                                                    sans-serif;
                                                  font-size: 16px;
                                                  width: 500px;
                                                "
                                                src="https://mosaico.io/srv/f-xxpjish/img?src=https%3A%2F%2Fmosaico.io%2Ffiles%2Fxxpjish%2Fdl_beatsnoop_com-600px-1664894569.jpg&amp;method=resize&amp;params=500%2Cnull"
                                            /></a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      id="ko_onecolumnBlock_1"
    >
      <tbody>
        <tr class="row-a">
          <td
            bgcolor="#9d197b"
            align="center"
            class="section-padding"
            style="
              padding-top: 30px;
              padding-left: 15px;
              padding-bottom: 30px;
              padding-right: 15px;
            "
          >
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="500"
              class="responsive-table"
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                    >
                      <tbody>
                        <tr>
                          <td>
                            <!-- COPY -->
                            <table
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    class="padding-copy"
                                    style="
                                      font-size: 25px;
                                      font-family: Helvetica, Arial, sans-serif;
                                      color: #ffffff;
                                      padding-top: 0px;
                                    "
                                  >
                                    <strong>Thank you for Registering</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    align="center"
                                    class="padding-copy textlightStyle"
                                    style="
                                      padding: 20px 0 0 0;
                                      font-size: 16px;
                                      line-height: 25px;
                                      font-family: Helvetica, Arial, sans-serif;
                                      color: #eeece1;
                                    "
                                  >
                                    <p style="text-align: left">
                                      Hello ${name},
                                    </p>
                                    <p style="text-align: left">
                                      Thank you for registering for MOMENTUM,
                                      our annual technical-cultural fest! We are
                                      excited to have you join us and are
                                      looking forward to a great event.
                                    </p>
                                    <p style="text-align: left">
                                      You will be notified with further updates
                                      soon. In the meantime, if you have any
                                      questions, please do not hesitate to
                                      contact us at momentum@ncuindia.edu.
                                    </p>
                                    <p style="text-align: left">
                                      Thank you again, and we hope to see you at
                                      MOMENTUM!
                                    </p>
                                    <p style="text-align: left">
                                      Sincerely,<br />Momentum 2022
                                    </p>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <!-- BULLETPROOF BUTTON -->
                            <table
                              width="100%"
                              border="0"
                              cellspacing="0"
                              cellpadding="0"
                              class="mobile-button-container"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    align="center"
                                    style="padding: 25px 0 0 0"
                                    class="padding-copy"
                                  >
                                    <table
                                      border="0"
                                      cellspacing="0"
                                      cellpadding="0"
                                      class="responsive-table"
                                    >
                                      <tbody>
                                        <tr>
                                          <td align="center">
                                            <a
                                              target="_new"
                                              class="mobile-button"
                                              style="
                                                display: inline-block;
                                                font-size: 18px;
                                                font-family: Helvetica, Arial,
                                                  sans-serif;
                                                font-weight: normal;
                                                color: #ffffff;
                                                text-decoration: none;
                                                background-color: #7030a0;
                                                padding-top: 15px;
                                                padding-bottom: 15px;
                                                padding-left: 25px;
                                                padding-right: 25px;
                                                border-radius: 3px;
                                                -webkit-border-radius: 3px;
                                                -moz-border-radius: 3px;
                                                border-bottom: 3px solid #4f2271;
                                              "
                                              href="https://momentum.ncuindia.edu/"
                                              >Show More →</a
                                            >
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      width="100%"
      id="ko_socialBlock_1"
    >
      <tbody>
        <tr class="row-a">
          <td
            bgcolor="#6f0152"
            align="center"
            class="section-padding"
            style="padding: 10px 15px 0px 15px"
          >
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              width="500"
              style="padding: 0 0 0px 0"
              class="responsive-table"
            >
              <tbody>
                <tr>
                  <td
                    align="center"
                    style="padding: 10 10 10px 10px; font-size: 25px"
                    class="padding-copy"
                  >
                    <a
                      target="_new"
                      href="https://www.instagram.com/ncumomentum/"
                      ><img
                        src="https://img.icons8.com/material-outlined/96/000000/instagram-new--v1.png"
                        alt="Instagram"
                        width="48"
                        height="48"
                        style="padding: 0 0px 0px 5px"
                    /></a>
                    <a
                      target="_new"
                      href="https://www.youtube.com/c/ITMUGurgaon"
                      ><img
                        src="https://img.icons8.com/material-outlined/96/000000/youtube-play--v1.png"
                        alt="Youtube"
                        width="48"
                        height="48"
                        style="padding: 0 0px 0px 5px"
                    /></a>
                    <a
                      target="_new"
                      href="https://www.facebook.com/ncumomentum/"
                      ><img
                        src="https://img.icons8.com/material-outlined/96/000000/facebook-new.png"
                        alt="Facebook"
                        width="48"
                        height="48"
                        style="padding: 0 0px 0px 5px"
                    /></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;
}
