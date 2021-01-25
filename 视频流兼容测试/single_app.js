const NodeMediaServer = require('node-media-server');

const config = {
    rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: 8000,
        allow_origin: '*'
    },
    relay: {
        ffmpeg: 'F:\\ffmpeg-20200628-4cfcfb3-win64-static\\bin\\ffmpeg.exe',
        tasks: [
            {
                //应用名称
                app: 'live',
                //工作模式 静态即可
                mode: 'pull', // 静态static
                //中继地址
                edge: 'rtsp://localhost:8554',
                //访问资源名称
                name: 'rtsp',
                //传输协议
                rtsp_transport: 'tcp',  //['udp', 'tcp', 'udp_multicast', 'http']
            }
        ]
    },
};

var nms = new NodeMediaServer(config)
nms.run();