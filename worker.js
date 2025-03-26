export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        const path = url.pathname;
        const postId = path.split('/').pop();
        
        // 处理 CORS
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
            });
        }
        
        // 获取点赞数
        if (request.method === 'GET' && path.startsWith('/upvotes/')) {
            const count = await env.UPVOTES.get(postId) || '0';
            return new Response(JSON.stringify({ count: parseInt(count) }), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            });
        }
        
        // 提交点赞
        if (request.method === 'POST' && path.startsWith('/upvote/')) {
            const currentCount = await env.UPVOTES.get(postId) || '0';
            const newCount = parseInt(currentCount) + 1;
            await env.UPVOTES.put(postId, newCount.toString());
            
            return new Response(JSON.stringify({ success: true }), {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
            });
        }
        
        return new Response('Not found', { status: 404 });
    },
}; 