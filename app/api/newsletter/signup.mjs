import mailchimp from '@mailchimp/mailchimp_marketing'
import md5 from 'md5'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
})

export async function post(req) {
  const { body } = req
  const { email, first_name, last_name = '', tell } = body

  // 'tell' is a honeypot field in the signup form which will only be filled in by spambots;
  // just return to the signup form if it's been completed to avoid spam submissions
  if (tell) {
    return {
      location: '/newsletter'
    }
  }

  const listId = '6069e33f8b'
  let result

  try {
    // Check subscriber status; if this doesn't throw an error, they're already on the list
    await mailchimp.lists.getListMember(listId, md5(email.toLowerCase()))
    result = 'exists'
  } catch (e) {
    // Email is not already on the mailing list
    if (e.status === 404) {
      // Subscribe the user
      await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: first_name,
          LNAME: last_name,
        }
      })

      result = 'success'
    }
  }

  return {
    location: '/newsletter',
    session: {
      result,
    }
  }
}
