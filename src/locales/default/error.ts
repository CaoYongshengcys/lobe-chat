export default {
  response: {
    400: '很抱歉，服务器不明白您的请求，请确认您的请求参数是否正确',
    401: '很抱歉，服务器拒绝了您的请求，可能是因为您的权限不足或未提供有效的身份验证',
    403: '很抱歉，服务器拒绝了您的请求，您没有访问此内容的权限 ',
    404: '很抱歉，服务器找不到您请求的页面或资源，请确认您的 URL 是否正确',
    405: '很抱歉，服务器不支持您使用的请求方法，请确认您的请求方法是否正确',
    429: '很抱歉，您的请求太多，服务器有点累了，请稍后再试',
    500: '很抱歉，服务器似乎遇到了一些困难，暂时无法完成您的请求，请稍后再试',
    502: '很抱歉，服务器似乎迷失了方向，暂时无法提供服务，请稍后再试',
    503: '很抱歉，服务器当前无法处理您的请求，可能是由于过载或正在进行维护，请稍后再试',
    504: '很抱歉，服务器没有等到上游服务器的回应，请稍后再试',

    InvalidAccessCode: '密码不正确或为空，请输入正确的访问密码，或者添加自定义 OpenAI API Key',
    OpenAIBizError: '请求 OpenAI 服务出错，请根据以下信息排查或重试',
  },
  unlock: {
    apikey: {
      description: '输入你的 OpenAI API Key 即可绕过密码验证。应用不会记录你的 API Key',
      title: '使用自定义 API Key',
    },
    confirm: '确认并重试',
    password: {
      description: '管理员已开启应用加密，输入应用密码后即可解锁应用。密码只需填写一次',
      title: '输入密码解锁应用',
    },
  },
};
